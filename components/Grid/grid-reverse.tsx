export const ReverseGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-[2px] md:gap-6">
      <div className="row-span-1">
        <img src="/images/avatars/dali.jpg" className="ex-img" alt="" />
      </div>

      <div className="row-span-1">
        <div>
          <img src="/images/avatars/orwell.jpg" className="ex-img" alt="" />
        </div>
        <div>
          <img src="/images/avatars/raphael.jpg" className="ex-img" alt="" />
        </div>
      </div>
      <div className="row-span-1 ">
        <div>
          <img src="/images/avatars/steve.jpg" className="ex-img" alt="" />
        </div>
        <div>
          <img src="/images/avatars/dali.jpg" className="ex-img" alt="" />
        </div>
      </div>
    </div>
  );
};
