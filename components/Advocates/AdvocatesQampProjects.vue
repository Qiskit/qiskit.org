<template>
  <section class="qamp-projects">
    <UiFiltersResultsLayout class="qamp-projects__filters-result-section">
      <template #filters-on-m-l-screen>
        <UiFieldset :label="filter.label">
          <client-only>
            <bx-checkbox
              v-for="option in filter.options"
              :key="option"
              :checked="isProjectFilterChecked(option)"
              :label-text="option"
              :value="option"
              @bx-checkbox-changed="
                updateProjectFilter(option, $event.target.checked)
              "
            />
          </client-only>
        </UiFieldset>
      </template>
      <template #filters-on-s-screen>
        <UiMultiSelect
          :label="filter.label"
          :options="filter.options"
          :value="projectFiltersAsString"
          @change-selection="updateProjectFilters($event)"
        />
      </template>
      <template #results>
        <div class="cds--row">
          <div
            v-for="project in filteredProjects"
            :key="project.name"
            class="cds--col-max-8 qamp-projects__card"
          >
            <UiCard
              :title="project.name"
              :tags="project.tags"
              cta-label="Go to repo"
              :segment="{
                cta: project.url,
                location: 'qamp-project-card',
              }"
              to="https://github.com/QAMP-EXAMPLE/<title-of-project>"
            ></UiCard>
            <bx-accordion
              v-if="
                project.contributors?.length != 0 ||
                project.mentors?.length != 0 ||
                project.mentees?.length != 0
              "
            >
              <bx-accordion-item title-text="Project contributors">
                <div
                  v-if="project.contributors?.length != 0"
                  class="qamp-projects__card__section"
                >
                  <h4>Contributors</h4>
                  <ul class="qamp-projects__card__list">
                    <li
                      v-for="contributor in project.contributors"
                      :key="contributor"
                      class="qamp-projects__card__list-item"
                    >
                      {{ contributor }}
                    </li>
                  </ul>
                </div>
                <div
                  v-if="project.mentors?.length != 0"
                  class="qamp-projects__card__section"
                >
                  <h4>Mentors</h4>
                  <ul class="qamp-projects__card__list">
                    <li
                      v-for="mentor in project.mentors"
                      :key="mentor"
                      class="qamp-projects__card__list-item"
                    >
                      {{ mentor }}
                    </li>
                  </ul>
                </div>
                <div
                  v-if="project.mentees?.length != 0"
                  class="qamp-projects__card__section"
                >
                  <h4>Mentees</h4>
                  <ul class="qamp-projects__card__list">
                    <li
                      v-for="mentee in project.mentees"
                      :key="mentee"
                      class="qamp-projects__card__list-item"
                    >
                      {{ mentee }}
                    </li>
                  </ul>
                </div>
              </bx-accordion-item>
            </bx-accordion>
          </div>
        </div>
      </template>
    </UiFiltersResultsLayout>
  </section>
</template>

<script setup lang="ts">
import { QampProject } from "~/types/advocates";
import rawProjects from "~/content/advocates/mock-qamp-projects.json";

const projects = rawProjects as QampProject[];

const filter = {
  label: "Cohorts",
  options: ["Spring 21", "Fall 21", "Spring 22", "Fall 22"],
};

const projectFilters = ref<string[]>([]);

const projectFiltersAsString = computed(() => projectFilters.value.join(","));

const filteredProjects = computed(() => {
  if (!projects) {
    return [];
  }

  const noProjectFilters = projectFilters.value.length === 0;

  return noProjectFilters
    ? projects
    : projects.filter((project) =>
        project.tags.some((tag) => projectFilters.value.includes(tag))
      );
});

const isProjectFilterChecked = (filterValue: string): boolean =>
  projectFilters.value.includes(filterValue);

function updateProjectFilter(option: string, isChecked: boolean) {
  const filteredProjectFilters = projectFilters.value.filter(
    (oldOption) => oldOption !== option
  );

  if (isChecked) {
    filteredProjectFilters.push(option);
  }

  projectFilters.value = filteredProjectFilters;
}

function updateProjectFilters(newProjectFilters: string) {
  const newProjectFiltersAsArray =
    newProjectFilters === "" ? [] : newProjectFilters.split(",");
  projectFilters.value = newProjectFiltersAsArray;
}
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";

.qamp-projects {
  &__filters-result-section {
    margin-top: carbon.$spacing-08;
  }

  &__card {
    margin-bottom: carbon.$spacing-06;

    &__section {
      &:not(:last-child) {
        margin-bottom: carbon.$spacing-07;
      }
    }

    &__list {
      display: flex;

      &-item {
        display: inline-block;
        padding-right: carbon.$spacing-05;
      }
    }
  }

  bx-accordion-item {
    &::part(content) {
      padding: carbon.$spacing-07;
      background-color: carbon.$cool-gray-10;
    }

    &::part(expando) {
      background-color: carbon.$cool-gray-20;
    }
  }
}
</style>
