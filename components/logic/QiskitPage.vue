<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import SegmentMixin, { TrackedPage } from '~/mixins/segment-analytics'

@Component
export default abstract class QiskitPage extends Mixins(SegmentMixin) implements TrackedPage {
  abstract routeName: string;
}
</script>
