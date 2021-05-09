<template>
  <main class="flex flex-col flex-wrap justify-center items-center space-y-10">
    <div class="figure-block w-full flex justify-evenly capitalize">
      <figure>
        <!-- accept all type of image file -->
        <img
          accept="image/*"
          :src="originalFile.source"
          @load="imgOnLoadHandler"
          class="min-h-[200px] min-w-[200px] border-8 max-w-md"
        />
        <figcaption>
          <p>Element: &lt;img&gt;</p>
          <p>
            File Size: <span class="text-blue-800">{{ originalFile.size }}</span> byte
          </p>
        </figcaption>
      </figure>

      <figure>
        <canvas ref="canvas" class="border-8"></canvas>
        <figcaption>
          <p>Element: &lt;canvas&gt;</p>
          <p>
            File Size: <span class="text-blue-800">{{ compressedFile.size }}</span> byte
          </p>
        </figcaption>
      </figure>
    </div>
    <div class="flex space-x-10">
      <label class="bg-blue-400 h-10 rounded-md ring-8 p-4 text-xl flex items-center capitalize">
        <span>upload Image</span>
        <input type="file" class="hidden" @input="inputListenHandler" />
      </label>

      <button
        type="button"
        class="bg-blue-400 h-10 rounded-md ring-8 p-4 text-xl flex items-center capitalize"
        @click="loadDefaultImage"
      >
        load default image
      </button>
    </div>
  </main>
</template>

<script>
import { reactive, ref } from 'vue'
import g100Image from '../assets/G100.jpg'

export default {
  setup() {
    const originalFile = reactive({
      source: '',
      size: '',
    })
    const compressedFile = reactive({
      source: '',
      size: '',
    })

    // vue3 setup() 中取得 template refs 的方法
    const canvas = ref(null)

    // event object 裡面的 currentTarget 和 target 的差異在於:
    // target 永遠指向 觸發事件的 dom element
    // 在這裡用 target, currentTarget 都是指向 file reader
    function inputListenHandler(event) {
      // 確認是否有 file
      if (event.target.files && event.target.files[0]) {
        const file = event.target.files[0]
        // 從 file 取得 size
        originalFile.size = file.size

        // 用 FileReader 讀取 input 所取得的檔案，把檔案用 data: URL 的方式呈現，讓 <img> 可以讀取
        const fileReader = new FileReader()
        fileReader.onload = progressEvent => {
          originalFile.source = progressEvent.target.result
        }
        fileReader.readAsDataURL(file)
      }
    }

    function imgOnLoadHandler(event) {
      // 這時候印出 event，console 中的 target 是 null，但實際上卻可以拿到正確的 target
      // Chrome 的小提示:
      // "This value was evaluated upon first expanding. It may have changed since then"
      console.log(event)
      const img = event.target

      // 限制將轉換的圖片最大寬度、長度
      const MAX_LENGTH = 300
      const context = canvas.value.getContext('2d')

      // 取得需要縮放的比例
      const scaleRatio = MAX_LENGTH / Math.max(img.width, img.width)

      // 設定 canvas 寬高
      canvas.value.width = scaleRatio * img.width
      canvas.value.height = scaleRatio * img.height

      // 把 img 圖像畫到 canvas
      context.drawImage(img, 0, 0, canvas.value.width, canvas.value.height)

      // 轉成 Blob 物件取得 size
      canvas.value.toBlob(blob => {
        compressedFile.size = blob.size
      })
    }

    function loadDefaultImage() {
      fetch(g100Image).then(response => {
        originalFile.size = response.headers.get('Content-Length')
        originalFile.source = response.url
      })
    }

    return {
      originalFile,
      compressedFile,

      canvas,

      imgOnLoadHandler,
      inputListenHandler,
      loadDefaultImage,
    }
  },
}
</script>
<style lang="postcss" scoped>
figure {
  @apply flex flex-col justify-between;
}
</style>