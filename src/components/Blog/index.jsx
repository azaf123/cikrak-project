import ButtonFill from '../ButtonFill';

// TODO: copy open modal passing props **** done but check logic again
const Blog = ({
  content,
  alternative,
  form,
  comimgSoon,
  setOpenModal,
  setOpenModalComingSoon,
  education,
}) => {
  function openForm() {
    setOpenModal(true);
  }
  function openComingSoon() {
    setOpenModalComingSoon(true);
  }
  function openEducation(event) {
    window.location.href = '/home-edu';
  }
  return (
    <section
      className={`flex ${
        alternative ? 'md:flex-row-reverse' : 'md:flex-row'
      } flex-col gap-6 py-12 md:px-28 px-6 items-center`}
    >
      <div className="flex-1">
        <img
          src={content.img}
          alt="img"
          className="md:h-[500px] h-full object-cover"
        />
      </div>
      <div className="flex-1">
        <h1 className="md:text-5xl font-semibold md:leading-snug text-3xl leading-normal">
          {content.title}
        </h1>
        <p className="text-sm text-gray-600 md:w-2/3 leading-relaxed py-5">
          {content.des}
        </p>
        <div
          onClick={
            form
              ? openForm
              : comimgSoon
              ? openComingSoon
              : education
              ? openEducation
              : undefined
          }
        >
          <ButtonFill>Find Out More</ButtonFill>
        </div>
      </div>
    </section>
  );
};

export default Blog;
