import ChapterHeadline from "../Layout/ChapterHeadline";
import SubChapter from "../Layout/SubChapter";
import SimpleSlider from "../Layout/Slider";
import WaveBox from "../Layout/WaveBox";
import avatarAnn from "../../public/avatarAnn.png";
import avatarStaImage from "../../public/avatarSta.png";
import avatarDaImage from "../../public/avatarda.svg";

const Reviews = () => {
  return (
    <div className="px-[12px] poppins-medium w-full">
      <ChapterHeadline chapter={5} />

      <SubChapter
        title="TESTIMONIALS"
        subTitle="My Testimonials"
        more="My Colleague Reviews"
      />
      <div className="w-full mb-[100px]">
        <SimpleSlider>
          {reviewList.map(({ name, position, review, img }) => (
            <div key={name} className="px-[12px] overflow-hidden">
              <div className="bg-flex max-h-[500px] min-h-[500px]  p-[20px] border-1 border-black">
                <div className="relative w-fit">
                  <WaveBox>
                    <img
                      src={img}
                      alt={name}
                      className="h-[82px] w-[82px] flex items-center justify-center border-2 rounded-full mb-[40px] mt-[10px]"
                    />
                  </WaveBox>
                </div>
                <h2 className="text-[32px] poppins-bold text-black">{name}</h2>
                <p className="poppins-semibold mb-[24px]">{position}</p>
                <p className="text-[20px] poppins-regular-italic no-scrollbar max-h-[210px] overflow-y-scroll">
                  {review}
                </p>
              </div>
            </div>
          ))}
        </SimpleSlider>
      </div>
    </div>
  );
};
const reviewList = [
  {
    img: avatarStaImage,
    name: "St***",
    position: "Customer orientation",
    review:
      "Weiß um die Anforderungen des WebApp Projekts, vor allem in Hinblick auf den Fertigstellungsdruck durch Stakeholder und der Wichtigkeit der Akzeptanz Kriterien in Hinblick zum nativem Vorbild der App.",
  },
  {
    img: avatarAnn,
    name: "An***",
    position: "Customer orientation",
    review:
      "Du hast eine sehr gute und tiefgreifende Kenntnis unseres Projektes und kannst dort auch größere Aufgaben selbstständig umsetzen. Du kennst in unserem Flugprojekt alle relevanten Details, um auch in Zusammenarbeit mit PM neue Features zu besprechen und dort auch Hinweise und Verbesserungsvorschläge einzubringen.",
  },
  {
    img: avatarStaImage,
    name: "St***",
    position: "Professional competence",
    review: "Solide Kenntnisse in JS/React",
  },
  {
    img: avatarDaImage,
    name: "Da***",
    position: "Professional competence",
    review:
      "Du erweiterst ständig Dein Fachwissen und erlangst im Projekt auch immer tiefgreifenderes Verständnis. Auch mit neuen Technologien bzw. Technologie-Updates kommst du gut zurecht bzw. kannst dich schnell einarbeiten (z.B. Remix, Update auf React 18, TypeScript). \n" +
      "Du zeichnest dich auch durch eine sehr hohe Lernbereitschaft aus und freust dich über Möglichkeiten, deine Fachkompetenzen zu erweitern und zu vertiefen.",
  },
  {
    img: avatarStaImage,
    name: "St***",
    position: "Excellence in Execution",
    review:
      "Sein Wissen in React ermöglicht ihm schnelles und effizientes Fertigstellen von komplexen Features (Gallerie, Rating Overlays)",
  },
  {
    img: avatarAnn,
    name: "An***",
    position: "Excellence in Execution",
    review:
      "Im Flugprojekt kennst Du Dich sehr gut aus und kannst dort auch mit allen relevanten Details umgehen.",
  },

  {
    img: avatarDaImage,
    name: "Da***",
    position: "Result orientation",
    review: "Arbeitet an vielen Themen => hoher Ticketumsatz.",
  },
  {
    img: avatarAnn,
    name: "An***",
    position: "Result orientation",
    review:
      'Du hast Spaß daran, immer möglichst viel "Output" zu liefern und somit das Team zügig voran zu bringen bzw. schnell Ergebnisse zu liefern.',
  },
  //Goal-oriented communication and cooperation
  {
    img: avatarStaImage,
    name: "St***",
    position: "Goal-oriented communication and cooperation",
    review:
      "Gibt sehr gute Ratschläge in Code Reviews und hinterfragt auch Lösungsansätze von anderen Entwicklern",
  },
  {
    img: avatarAnn,
    name: "An***",
    position: "Goal-oriented communication and cooperation",
    review:
      "Du arbeitest stets zielstrebig, freundlich und proaktiv mit allen Kollegen zusammen. \n" +
      "Du teilst auch gern Dein Wissen mit den Azubis und erklärst komplexe Zusammenhänge für alle verständlich. \n" +
      "Du gehst auch aktiv auf Kollegen zu und fragst aktiv nach Feedback oder Anregungen bei auftretenden Problemen.",
  },
];

export default Reviews;
