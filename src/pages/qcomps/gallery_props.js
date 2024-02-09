function Entry({ name, image, profession, awardCount, awards, discovery }) {
  return (
    <section className="profile">
      <h2>{name}</h2>
      <img className="avatar" src={image} alt={name} width={70} height={70} />
      <ul>
        <li>
          <b>Profession: </b>
          {profession}
        </li>
        <li>
          <b>Awards: {awardCount} </b>({awards})
        </li>
        <li>
          <b>Discovered: </b>
          {discovery}
        </li>
      </ul>
    </section>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Entry
        name={"Maria Skłodowska-Curie"}
        image={"https://i.imgur.com/szV5sdGs.jpg"}
        profession={"physicist and chemist"}
        awardCount={4}
        awards={
          "Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal"
        }
        discovery={"polonium (element)"}
      />

      <Entry
        name={"Katsuko Saruhashi"}
        image={"https://i.imgur.com/YfeOqp2s.jpg"}
        profession={"geochemist"}
        awardCount={2}
        awards={"Miyake Prize for geochemistry, Tanaka Prize"}
        discovery={"a method for measuring carbon dioxide in seawater"}
      />
    </div>
  );
}
