const SubscribeSection = () => {
  return (
    <section className="rounded-lg bg-moon-mist flex flex-col items-start self-stretch p-[30px_5px]">
      <h2 className="text-mine-shaft text-center text-[22px] font-normal leading-[24px] w-full">
        Don&#39;t miss out
      </h2>

      <p className="text-mine-shaft text-center text-base font-normal leading-[20px] mt-4 w-full">
        Join our email list for the latest books, special editions, author
        events and much more!
      </p>

      <div className="flex w-[850px] max-w-[850px] px-[15px] items-center mt-6 mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-grow p-2 border border-mine-shaft rounded-lg mr-4"
        />

        <div className="flex items-center mr-4">
          <input type="checkbox" className="w-[22px] h-[22px] mr-2" />
          <label className="text-mine-shaft text-left text-xs">
            <p>By subscribing, you agree to our Privacy Policy.</p>
            <p>You can opt out at any time.</p>
          </label>
        </div>

        <button className="rounded-lg bg-mine-shaft text-white flex justify-center items-center h-[40px] px-[26.08px] py-[6px_7px] whitespace-nowrap">
          SIGN UP
        </button>
      </div>
    </section>
  );
};

export default SubscribeSection;
