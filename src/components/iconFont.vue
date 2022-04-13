<template>
  <div>
    <svg :style="{width:iconClass.width,height:iconClass.height}" aria-hidden="true">
      <use :xlink:href="'#'+iconHref" />
    </svg>
  </div>
</template>
<script>
export default {
    props:['iconClass','iconHref']
}
</script>
