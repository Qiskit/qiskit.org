<template>
  <article class="app-mega-dropdown">
    <label
      ref="searchFieldWrapper"
      class="app-mega-dropdown__search-field-wrapper"
      :class="`app-mega-dropdown__search-field-wrapper_${kind}`"
    >
      <input
        v-model="filterText"
        type="text"
        class="app-mega-dropdown__search-field-wrapper__input"
        :placeholder="`${placeholder}`"
        @focus="onSearchFieldFocus"
      >
      <svg class="app-mega-dropdown__search-field-wrapper__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16 22L6 12l1.4-1.4 8.6 8.6 8.6-8.6L26 12z" /></svg>
    </label>
    <div
      v-if="showContent"
      ref="dropdown"
      class="app-mega-dropdown__content-container"
    >
      <nav class="app-mega-dropdown__content">
        <div v-for="(column, columnIndex) in filteredContent" :key="`${columnIndex}`" class="app-mega-dropdown__content-column">
          <div v-for="(group, groupIndex) in column" :key="`${groupIndex}`">
            <BasicLink
              class="app-mega-dropdown__content-link app-mega-dropdown__content-link_title"
              :url="group.title.url"
            >
              <span
                v-for="(part) in splitTextInHighlightParts(group.title.label)"
                :key="`${part.index}-${part.text.length}`"
                :class="{'app-mega-dropdown__content-link__text-highlight': part.highlight}"
              >{{ part.text }}</span>
            </BasicLink>
            <BasicLink
              v-for="chapter in group.content"
              :key="chapter.label"
              class="app-mega-dropdown__content-link"
              :url="chapter.url"
            >
              <span
                v-for="(part) in splitTextInHighlightParts(chapter.label)"
                :key="`${part.index}-${part.text.length}`"
                :class="{'app-mega-dropdown__content-link__text-highlight': part.highlight}"
              >{{ part.text }}</span>
            </BasicLink>
          </div>
        </div>
      </nav>
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { MegaDropdownMenu, MegaDropdownMenuColumn, MegaDropdownMenuGroup } from '~/constants/megaMenuLinks'

interface HighlightTextState {
  text: string,
  highlight: boolean
}

@Component
export default class AppMegaDropdownMenu extends Vue {
  @Prop({ type: String, default: 'primary' }) kind!: 'primary'|'secondary'
  @Prop({ type: String, default: 'Browse content' }) placeholder!: string
  @Prop(Array) content!: MegaDropdownMenu

  showContent = false;

  onSearchFieldFocus () {
    this.showContent = true
  }

  filterText = ''

  filterWords (): string[] {
    return this.filterText.trim().toLowerCase().split(' ')
  }

  filterTextIsEmpty (): boolean {
    return this.filterText.trim() === ''
  }

  splitTextInHighlightParts (text: string) : HighlightTextState[] {
    const textIsEmpty = text.trim() === ''
    if (this.filterTextIsEmpty() || textIsEmpty) {
      return [{ text, highlight: false }]
    }

    const charIsHighlightArray = this._splitTextInHighlightChars(text, this.filterWords())

    const textHighlightParts = this._joinCharsByHighlightState(charIsHighlightArray)

    return textHighlightParts
  }

  // Splits the text in characters and sets a "highlight" property indicating if the character should be highlighted or not
  _splitTextInHighlightChars (text: string, filterWords: string[]) : HighlightTextState[] {
    const charArray = Array.from(text)
    // Assign a highlight flag to each character
    const highlightStates = charArray.map<HighlightTextState>(letter => ({ text: letter, highlight: false }))
    const lowerCaseText = text.toLowerCase()

    filterWords.forEach((word: string) => {
      // start highlighting index
      let from = lowerCaseText.indexOf(word)

      while (from >= 0) {
        // end highlighting index
        const to = from + word.length

        for (let i = from; i < to; i++) {
          highlightStates[i].highlight = true
        }
        // the text could have the same word multiple times.
        from = lowerCaseText.indexOf(word, to)
      }
    })

    return highlightStates
  }

  // Join consecutive characters with the same highlight property
  // The result is an array of texts flaged by a highlight property
  // The n+1 text has always the opposit highlight state of n.
  _joinCharsByHighlightState (highlightStateByChar: HighlightTextState[]): HighlightTextState[] {
    const output = [{
      text: highlightStateByChar[0].text,
      highlight: highlightStateByChar[0].highlight,
      index: 0
    }]

    for (let i = 1; i < highlightStateByChar.length; i++) {
      const lastCharState = output[output.length - 1]
      const currentChar = highlightStateByChar[i]
      const highlightTextContinues = lastCharState.highlight === currentChar.highlight

      if (highlightTextContinues) {
        lastCharState.text = lastCharState.text.concat(currentChar.text)
      } else {
        output.push({
          text: currentChar.text,
          highlight: currentChar.highlight,
          index: i
        })
      }
    }

    return output
  }

  get filteredContent (): MegaDropdownMenu {
    if (this.filterTextIsEmpty()) {
      return this.content
    }

    const filterWords: string[] = this.filterWords()

    const filteredContent = this.content.map((column: MegaDropdownMenuColumn) => this._filterMegaDropdownColumn(column, filterWords))
    const nonEmptyColumnsFilteredContent = filteredContent.filter((column: MegaDropdownMenuColumn) => column.length > 0)

    return nonEmptyColumnsFilteredContent
  }

  _filterMegaDropdownColumn (column: MegaDropdownMenuColumn, filterWords: string[]): MegaDropdownMenuColumn {
    const filteredColumn = column.map((group: MegaDropdownMenuGroup) => this._filterMegaDropdownGroupLinks(group, filterWords))
    const nonEmptyGroupsFilteredColumn = filteredColumn.filter((group: MegaDropdownMenuGroup) => group.content.length > 0)

    return nonEmptyGroupsFilteredColumn
  }

  _filterMegaDropdownGroupLinks (group: MegaDropdownMenuGroup, filterWords: string[]): MegaDropdownMenuGroup {
    const titleSelected = filterWords.every(word => group.title.label.toLowerCase().includes(word))
    if (titleSelected) {
      return group
    }

    const filteredLinks = group.content.filter(link => this._applyFilter(link.label, filterWords))

    return {
      title: group.title,
      content: filteredLinks
    }
  }

  _applyFilter (text: string, filterWords: string[]) {
    return filterWords.every(word => text.toLowerCase().includes(word))
  }

  mounted () {
    document.addEventListener('mousedown', this.handleClick)
  }

  beforeDestroy () {
    document.removeEventListener('mousedown', this.handleClick)
  }

  handleClick (e: MouseEvent) {
    const buttonElement = this.$refs.searchFieldWrapper as Element
    const dropdownElement = this.$refs.dropdown as Element|undefined

    if (dropdownElement) {
      const clickedOnDropdown = dropdownElement.contains(e.target as Node)
      const clickedOnButton = buttonElement.contains(e.target as Node)
      const shouldCloseDropdown = !clickedOnDropdown && !clickedOnButton

      if (shouldCloseDropdown) {
        this.showContent = false
        this.filterText = ''
      }
    }
  }
}
</script>

<style lang="scss">
@import '~carbon-components/scss/globals/scss/typography';

.app-mega-dropdown {
  @include type-style('body-short-01');

  color: $text-color-light;
  position: relative;

  &__search-field-wrapper {
    display: flex;
    width: 18rem;
    justify-content: space-between;
    align-items: center;
    padding: $spacing-03;

    color: $cool-gray-80;
    fill: $cool-gray-80;
    border-bottom: 1px solid $purple-70;

    &__input {
      flex: 1;
      background-color: transparent;
      outline: none;
      border: none;
      color: inherit;
    }
    &__input:focus::placeholder {
      opacity: 0.25;
    }

    &__icon {
      flex: 0 0 1rem;
    }

    &__icon > path {
      transform: translate(0, 0);
      transition: transform 0.2s ease-in-out;
    }

    &:hover &__icon > path {
      transform: translate(0, 4px);
      transition: transform 0.2s ease-in-out;
    }

    &_primary {
      background-color: transparent;
    }
    &_primary &__input::placeholder {
      color: $cool-gray-80;
    }

    &_secondary {
      background-color: $white;
    }
    &_secondary &__input::placeholder {
      color: $cool-gray-80;
    }
  }

  &__content-container {
    position: absolute;
    top: 2.2rem;
    padding: $spacing-07 $spacing-05;
    width: 12 * $column-size-large;
    background-color: $white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    height: 32rem;
    overflow-y: scroll;
    overflow-x: auto;

    @include mq($until: large) {
      width: 100%;
    }

    @include mq($until: medium) {
      left: 0;
      right: 0;
      height: initial;
    }
  }

  &__content {
    display: flex;
    justify-content: space-between;
    gap: $spacing-09;

    @include mq($until: medium) {
      flex-direction: column;
    }

    &-column {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: $spacing-09;
    }

    &-link {
      display:block;
      padding-bottom: $spacing-05;
      color: $cool-gray-80;
      text-decoration: none;

      &_title {
        font-weight: 600;
      }
      &__text-highlight {
        background-color: $purple-20;
      }
    }
  }
}
</style>
