import Card from "./Card";

export default function Project() {
  return (
    <section id="project">
      <div className="text-white">
        <div className="w-[1280px] mx-auto">
          <div className="text-40">PROJECT</div>
          <div className="pt-[100px] pb-[80px] flex flex-wrap justify-between">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </section>
  );
}
