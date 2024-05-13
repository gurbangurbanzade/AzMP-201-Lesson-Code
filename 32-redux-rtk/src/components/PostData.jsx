import React from "react";
import {
  usePostProductMutation,
  useGetAllProductQuery,
} from "../services/product";
import { Swiper, SwiperSlide } from "swiper/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Import Swiper styles
import "swiper/css";

const PostData = () => {
  const notify = () => toast("Wow so easy!");
  const [postProduct] = usePostProductMutation();
  const { refetch } = useGetAllProductQuery();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("sdcfsg");
    // console.log(e.target.name.value);
    let obj = {
      name: e.target.name.value,
    };

    await postProduct({ obj });
    refetch();
  };
  return (
    <div>
      <button onClick={notify}>Saidin toustu</button>
      <ToastContainer />
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
      </Swiper>
      <form type="submit" onSubmit={handleSubmit}>
        <input type="text" name="ad" id="name" placeholder="salam" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default PostData;
