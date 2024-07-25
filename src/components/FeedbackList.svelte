<script>
  import FeedbackItem from "./FeedbackItem.svelte";
  import { fade, scale } from "svelte/transition";
  import { FeedbackStore } from "../stores";

  let feedback = [];

  console.log(feedback);
</script>

{#each $FeedbackStore as item (item.id)}
  <div in:scale out:fade>
    <FeedbackItem {item} on:delete-feedback />
  </div>
{/each}
