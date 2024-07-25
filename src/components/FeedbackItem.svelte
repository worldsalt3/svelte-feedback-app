<script>
  import Card from "./Card.svelte";
  import { FeedbackStore } from "../stores";
  export let item;

  const handleDelete = (id) => {
    FeedbackStore.update((currentFeedback) => {
      return currentFeedback.filter((item) => item.id != id);
    });
  };
</script>

<Card>
  <div class="num-display">
    {item.rating}
  </div>
  <button on:click={() => handleDelete(item.id)} class="close">X</button>
  <div class="text-display">{item.text}</div>
</Card>

<style>
  .num-display {
    position: absolute;
    top: -10px;
    left: -10px;
    width: 50px;
    height: 50px;
    background-color: #ff6a95;
    color: #fff;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    text-align: center;
    font-size: 19px;
  }

  .close {
    position: absolute;
    top: 10px;
    right: 20px;
    cursor: pointer;
    background: none;
    border: none;
  }
</style>
