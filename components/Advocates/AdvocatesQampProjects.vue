<template>
  <section class="qamp-projects">
    <UiFiltersResultsLayout class="qamp-projects__filters-result-section">
      <template #filters-on-m-l-screen>
        <UiFieldset :label="filter.label">
          <client-only>
            <bx-checkbox
              v-for="option in filter.options"
              :key="option"
              :checked="isCohortFilterChecked(option)"
              :label-text="option"
              :value="option"
              @bx-checkbox-changed="
                updateCohortFilter(option, $event.target.checked)
              "
            />
          </client-only>
        </UiFieldset>
      </template>
      <template #filters-on-s-screen>
        <UiMultiSelect
          :label="filter.label"
          :options="filter.options"
          :value="cohortFiltersAsString"
          @change-selection="updateCohortFilters($event)"
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
              :tags="[project.cohort.name]"
              cta-label="Go to repo"
              :segment="{
                cta: project.githubIssueUrl,
                location: 'qamp-project-card',
              }"
              :to="project.githubIssueUrl"
            ></UiCard>
            <bx-accordion v-if="hasParticipants(project)">
              <bx-accordion-item title-text="Project contributors">
                <div
                  v-if="hasCollaborators(project)"
                  class="qamp-projects__card__section"
                >
                  <h4>Collaborators</h4>
                  <ul class="qamp-projects__card__list">
                    <li
                      v-for="collaborator in project.collaborators"
                      :key="collaborator.name"
                      class="qamp-projects__card__list-item"
                    >
                      {{ collaborator.name }}
                    </li>
                  </ul>
                </div>
                <div
                  v-if="hasMentors(project)"
                  class="qamp-projects__card__section"
                >
                  <h4>Mentors</h4>
                  <ul class="qamp-projects__card__list">
                    <li
                      v-for="mentor in project.mentors"
                      :key="mentor.name"
                      class="qamp-projects__card__list-item"
                    >
                      {{ mentor.name }}
                    </li>
                  </ul>
                </div>
                <div
                  v-if="hasMentees(project)"
                  class="qamp-projects__card__section"
                >
                  <h4>Mentees</h4>
                  <ul class="qamp-projects__card__list">
                    <li
                      v-for="mentee in project.mentees"
                      :key="mentee.name"
                      class="qamp-projects__card__list-item"
                    >
                      {{ mentee.name }}
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
import rawProjects from "~/content/qamp/qamp-projects.json";
import type { QampProject } from "~/types/qamp";

const projects = rawProjects as QampProject[];

const cohortNames = Array.from(
  new Set(projects.map((project) => project.cohort.name))
);

const filter = {
  label: "Cohorts",
  options: cohortNames,
};

const cohortFilters = ref<string[]>([]);

const cohortFiltersAsString = computed(() => cohortFilters.value.join(","));

const filteredProjects = computed(() => {
  if (!projects) {
    return [];
  }

  const noCohortFilters = cohortFilters.value.length === 0;

  return noCohortFilters
    ? projects
    : projects.filter((project) =>
        cohortFilters.value.includes(project.cohort.name)
      );
});

const hasCollaborators = (project: QampProject): boolean =>
  project.collaborators.length > 0;

const hasMentees = (project: QampProject): boolean =>
  project.mentees.length > 0;

const hasMentors = (project: QampProject): boolean =>
  project.mentors.length > 0;

const hasParticipants = (project: QampProject): boolean =>
  hasCollaborators(project) || hasMentees(project) || hasMentors(project);

const isCohortFilterChecked = (filterValue: string): boolean =>
  cohortFilters.value.includes(filterValue);

function updateCohortFilter(option: string, isChecked: boolean) {
  const filteredCohortFilters = cohortFilters.value.filter(
    (oldOption) => oldOption !== option
  );

  if (isChecked) {
    filteredCohortFilters.push(option);
  }

  cohortFilters.value = filteredCohortFilters;
}

function updateCohortFilters(newCohortFilters: string) {
  const newCohortFiltersAsArray =
    newCohortFilters === "" ? [] : newCohortFilters.split(",");
  cohortFilters.value = newCohortFiltersAsArray;
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
