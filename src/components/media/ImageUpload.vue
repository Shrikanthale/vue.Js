<template>
  <div
    class="uploader"
    @dragenter="OnDragEnter"
    @dragleave="OnDragLeave"
    @dragover.prevent
    @drop="onDrop"
    :class="{ dragging: isDragging }"
  >
    <i class="fal fa-cloud-download"> </i>
    <i class="bi bi-cloud-arrow-down"></i>
    <i class="bi bi-cloud-arrow-up-fill"></i>
    <p>drag file here</p>
    <div>or</div>
    <div class="file-input">
      <label for="file">select a file</label>
      <input type="file" id="file" @change="onInputChange" multiple />
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageUpload",
  data() {
    return {
      isDragging: false,
      dragCount: 0,
      files: [],
      images: [],
    };
  },
  methods: {
    OnDragEnter(e) {
      e.preventDefault();
      console.log("dcnkxc");
      this.dragCount++;
      this.isDragging = true;
    },
    OnDragLeave(e) {
      e.preventDefault();
      console.log("dcnkxc")
      this.dragCount--;

      if (this.dragCount <= 0) this.isDragging = false;
    },
    onInputChange(e) {
      console.log(e);
    },
    onDrop(e) {
      e.preventDefault();
       console.log("dcnkxc")
      e.stopPropagation();
      this.isDragging = false;

      const files = e.dataTransfer.files;

      Array.from(files).forEach((file) => this.addImage(file));
    },
    addImage(file) {
      if (!file.type.match("image.*")) {
        console.log(`${file.name} is not an image `);
        return;
      }

      this.files.push(file);
    },
  },
};
</script>

<style scoped>
.uploader {
  width: 100%;
  background: #2196;
  color: #fff;
  padding: 40px 15px;
  text-align: center;
  border-radius: 10px;
  border: 1px solid #fff;
  font-size: 20px;
  position: relative;

  &.dragging {
    background: #fff;
    color: #2196;
    border: 2px dashed #2196;
  }

  i {
    font: size 85px;
  }
}
.file-input {
  width: 200px;
  margin: auto;
  height: 60px;
  position: relative;

  label,
  input {
    background: #fff;
    color: #2196;
    width: 100%;
  }
}
</style>
