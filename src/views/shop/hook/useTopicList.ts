import { onMounted, reactive } from "vue";
import { getTopicList } from "@/api/shop";

export default function ():any {
  const topicList = reactive({
    images: []
  })
  const getImage = () => {
    getTopicList().then((res) => {
      topicList.images = res.data
      console.log(res);
    })
  }
  onMounted(() => {
    getImage()
  })
  const showTopic = (link: string):void => {
    window.location.href = link
  }
  return{
    topicList,
    getImage,
    showTopic
  }
}
