const CompanyIntro = ({ dict }: { dict: any }) => {
  return (
    <section className="p-10 [&>*]:mb-12">
      <div className="flex justify-center ">
        <h1 className="text-2xl xs:text-3xl lg:text-4xl font-sans">
          {dict.aboutUs}
        </h1>
      </div>
      <div className="flex justify-center">
        <p
          className="max-w-[60rem]"
          dangerouslySetInnerHTML={{ __html: dict.brand.introduction }}
        />
      </div>
    </section>
  );
};

export default CompanyIntro;
