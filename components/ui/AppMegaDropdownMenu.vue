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
                v-for="(part) in highlightParts(group.title.label)"
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
                v-for="(part) in highlightParts(chapter.label)"
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
import { NavLink } from '~/constants/menuLinks'

@Component
export default class TheMegaDropdownMenu extends Vue {
  @Prop({ type: String, default: 'primary' }) kind!: 'primary'|'secondary'
  @Prop({ type: String, default: 'Browse content' }) placeholder!: string
  @Prop(Array) content!: MegaDropdownMenu

  showContent = false;

  onSearchFieldFocus () {
    this.showContent = true
  }

  filterText = ''
  get filterWords (): string[] {
    return this.filterText.trim().toLowerCase().split(' ')
  }

  highlightParts (text: string) {
    if (this.filterText.trim() === '' || text.trim() === '') {
      return [{ text, hightlight: false }]
    }

    const highlightedChars = Array.from(text).map((letter:string) => { return { letter, highlight: false } })

    const lowerCaseText = text.toLowerCase()
    this.filterWords.forEach((word: string) => {
      let from = lowerCaseText.indexOf(word)
      while (from >= 0) {
        const to = from + word.length
        for (let i = from; i < to; i++) {
          highlightedChars[i].highlight = true
        }
        from = lowerCaseText.indexOf(word, to)
      }
    })

    const output = [{ text: highlightedChars[0].letter, highlight: highlightedChars[0].highlight, index: 0 }]
    for (let i = 1; i < highlightedChars.length; i++) {
      const lastElem = output[output.length - 1]
      const currChar = highlightedChars[i]
      if (lastElem.highlight === currChar.highlight) {
        lastElem.text = `${lastElem.text}${currChar.letter}`
      } else {
        output.push({ text: currChar.letter, highlight: currChar.highlight, index: i })
      }
    }

    return output
  }

  get filteredContent () {
    if (this.filterText === '') {
      return this.content
    }
    const filterWords: string[] = this.filterWords

    return this.content.map<MegaDropdownMenuColumn>((column: MegaDropdownMenuColumn) => {
      return column.map<MegaDropdownMenuGroup>((group: MegaDropdownMenuGroup) => {
        const titleSelected = filterWords.every(word => group.title.label.toLowerCase().includes(word))
        if (titleSelected) {
          return group
        }

        return {
          title: group.title,
          content: group.content.filter((link: NavLink) => {
            return filterWords.every(word => link.label.toLowerCase().includes(word))
          })
        }
      }).filter((group: MegaDropdownMenuGroup) => {
        return group.content.length > 0
      })
    }).filter((column: MegaDropdownMenuColumn) => {
      return column.length > 0
    })
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
      color: $cool-gray-80;
      fill: $cool-gray-80;
      border-bottom: 1px solid $cool-gray-80;
    }
    &_primary &__input::placeholder {
      color: $cool-gray-80;
    }

    &_secondary {
      color: $white;
      fill: $white;
      border-bottom: 1px solid $white;
    }
    &_secondary &__input::placeholder {
      color: $white;
    }
  }

  &__content-container {
    position: absolute;
    top: 2.2rem;
    padding: $spacing-07 $spacing-05;
    width: 12 * $column-size-large;
    background-color: $background-color-white;
    box-shadow: -4px 4px 12px rgba(0, 0, 0, .1);
    height: 32rem;
    overflow: scroll;

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
        background-color: yellow;
      }
    }
  }
}
</style>
