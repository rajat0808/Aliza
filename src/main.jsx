import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const ASSET_BASE = `${import.meta.env.BASE_URL}assets/`;
const PHOTO_SRC = `${ASSET_BASE}IMG_20260913_050139_348.jpg`;
const doodleTypes = ["heart", "spark", "ring", "squiggle", "dot"];
const imageAssets = [
  "IMG_20260913_050139_348.jpg",
  "IMG_20260913_085316_495.jpg",
  "IMG_20260913_085322_867.jpg",
  "IMG_20260913_085324_869.jpg",
  "IMG_20260913_085327_934.jpg",
  "IMG_20260913_085331_407.jpg",
  "IMG_20260913_085334_076.jpg",
  "IMG_20260913_085339_826.jpg",
  "IMG_20260913_085341_089.jpg",
  "IMG_20260913_085343_136.jpg",
  "IMG_20260913_085345_200.jpg",
  "IMG_20260913_085347_389.jpg",
  "Snapchat-1001305080.jpg",
  "Snapchat-1158442456.jpg",
  "Snapchat-837963236.jpg",
  "Snapchat-886623256.jpg",
];
const videoAssets = ["VID_20260912_163141_037.mp4", "VID_20260912_202319_235.mp4"];

function Doodle({ type, index }) {
  return (
    <span
      className={`doodle doodle-${type}`}
      style={{
        "--x": `${8 + ((index * 19) % 86)}vw`,
        "--y": `${7 + ((index * 23) % 82)}vh`,
        "--delay": `${index * -0.7}s`,
        "--duration": `${7 + (index % 5)}s`,
        "--scale": `${0.72 + (index % 4) * 0.12}`,
      }}
      aria-hidden="true"
    />
  );
}

function LittleBuddy() {
  return (
    <svg className="littleBuddy" viewBox="0 0 160 150" aria-hidden="true">
      <path
        className="buddyBody"
        d="M73.5 16.5c28.6-2.2 52.8 17 55.2 43.8 1 11.3-2.3 21.3-8.5 29.5l16.9 9.1c3.8 2.1 4.2 7.3.6 9.9l-20 14.2c-3.6 2.6-8.7.2-9-4.2l-.9-12.8c-5.5 2.7-11.8 4.4-18.4 4.9l-1.8 21.9c-.4 5.2-6.8 7.6-10.6 4l-19.8-18.7c-2.7-2.6-2.7-7 .1-9.4l5.4-4.6c-17.2-6-29.9-20.3-31.5-39.3C28.7 38.1 45 18.8 73.5 16.5Z"
      />
      <path className="buddyLine" d="M51.7 100.2c-12.6 1.8-21.4.9-24.1-2.6-2.2-2.8.2-6 8.3-7.8" />
      <path className="buddyLine" d="M116.2 85.7c13.2-1.2 22.5.3 24.8 4.2 1.9 3.3-1.7 6.1-10.4 7.2" />
      <path className="buddyFace" d="M62 61.9c1.4 3.4 4.8 5.6 8.5 5.3 3.6-.3 6.6-3 7.4-6.5" />
      <circle className="buddyEye" cx="53" cy="55" r="3.4" />
      <circle className="buddyEye" cx="83" cy="52.5" r="3.4" />
    </svg>
  );
}

function SadBear() {
  return (
    <svg className="cuteArt bearArt" viewBox="0 0 220 175" aria-hidden="true">
      <ellipse className="shadow" cx="118" cy="153" rx="51" ry="11" />
      <circle className="bearStroke bearFill" cx="86" cy="45" r="18" />
      <circle className="bearStroke bearFill" cx="154" cy="45" r="18" />
      <path className="bearStroke bearFill" d="M63 58c3-38 111-41 117 2 4 25-2 61-27 77-22 15-65 14-87-8-19-19-18-50-3-71Z" />
      <circle className="bearEye" cx="86" cy="85" r="6" />
      <circle className="bearEye" cx="128" cy="87" r="6" />
      <circle className="blush" cx="151" cy="99" r="15" />
      <path className="bearLine" d="M103 103c6-7 15-7 22 0" />
      <path className="bearLine" d="M110 76c7 3 13 2 18-3" />
      <path className="bearStroke bearFill" d="M69 115c-5 28 15 43 33 31 14-9 6-37-10-44-10-4-19 2-23 13Z" />
      <path className="bearStroke bearFill" d="M127 118c-11 23 4 42 24 32 16-8 15-34 1-44-9-7-20 0-25 12Z" />
      <path className="stem" d="M55 130 81 78" />
      <path className="leaf" d="M81 78c-2-17 17-22 24-8-7 9-15 12-24 8Z" />
    </svg>
  );
}

function BunnyQuestion() {
  return (
    <svg className="cuteArt bunnyArt" viewBox="0 0 230 190" aria-hidden="true">
      <path className="banana" d="M36 137c38 17 117 17 159 0-9 31-143 32-159 0Z" />
      <path className="bunnyStroke bunnyFill" d="M100 61c-26 5-45 26-45 54 0 34 28 55 65 55s66-21 66-55c0-31-22-51-52-55" />
      <path className="bunnyStroke bunnyFill" d="M102 66c-24-22-12-60 9-48 16 9 14 36-9 48Z" />
      <path className="bunnyStroke bunnyFill" d="M132 65c-3-30 21-50 32-32 10 17-6 36-32 32Z" />
      <circle className="bunnyEye" cx="95" cy="111" r="7" />
      <circle className="bunnyEye" cx="139" cy="105" r="7" />
      <circle className="bunnyBlush" cx="78" cy="126" r="9" />
      <circle className="bunnyBlush" cx="155" cy="124" r="9" />
      <path className="bunnyLine" d="M116 119c4 4 8 4 12 0" />
      <path className="bunnyLine" d="M122 123c-2 10-13 10-15 0M122 123c2 10 13 9 15-1" />
      <path className="bunnyStroke bunnyFill" d="M78 137c18-4 25 5 20 24" />
      <path className="bunnyStroke bunnyFill" d="M153 137c-18-4-25 5-20 24" />
      <text className="questionMark" x="176" y="69">?</text>
    </svg>
  );
}

function KissBear() {
  return (
    <svg className="cuteArt kissArt" viewBox="0 0 230 170" aria-hidden="true">
      <rect className="softSky" x="22" y="12" width="186" height="132" rx="2" />
      <circle className="cloud" cx="57" cy="61" r="16" />
      <circle className="cloud" cx="187" cy="35" r="14" />
      <circle className="bearStroke bearFill light" cx="81" cy="50" r="17" />
      <circle className="bearStroke bearFill light" cx="149" cy="50" r="17" />
      <path className="bearStroke bearFill light" d="M67 64c8-30 88-31 98 0 7 24-4 63-50 64-43 1-55-39-48-64Z" />
      <circle className="bearEye" cx="93" cy="79" r="5" />
      <circle className="bearEye" cx="138" cy="79" r="5" />
      <path className="bearLine" d="M112 89c4 4 9 4 13 0M118 92v14" />
      <path className="kissBlush" d="M73 97c9 1 15 7 18 16" />
      <path className="kissBlush" d="M159 97c-9 1-15 7-18 16" />
      <path className="bearStroke bearFill light" d="M70 107c-17 32 4 50 27 26 11-12 3-38-11-42-6-2-12 3-16 16Z" />
      <path className="bearStroke bearFill light" d="M160 107c17 32-4 50-27 26-11-12-3-38 11-42 6-2 12 3 16 16Z" />
    </svg>
  );
}

const pages = [
  {
    eyebrow: "psst...",
    kind: "hello",
    button: "open it",
  },
  {
    eyebrow: "first thing first ~",
    kind: "photo",
    title: "you look cute today.",
    note: "(also yesterday, also tomorrow, yeah.)",
    button: "aww next",
  },
  {
    kind: "bear",
    title: "missing you",
    emoji: "🥺",
    note: "even if i saw you\nlike 2 mins ago.",
    button: "same",
  },
  {
    eyebrow: "quick question ~",
    kind: "question",
    title: "are you mine?",
    buttons: ["yesss", "always"],
  },
  {
    eyebrow: "then take this ~",
    kind: "kiss",
    title: "muah",
    note: "catch it before it\nmelts okay?",
    button: "caught it",
  },
  {
    eyebrow: "secret little place ~",
    kind: "secret",
    title: "our cozy forever folder",
  },
  {
    eyebrow: "one last question ~",
    kind: "choose",
    title: "will you always choose me?",
  },
];

function CardDots() {
  return (
    <div className="cardDots" aria-hidden="true">
      <span />
      <span />
      <span />
    </div>
  );
}

function Pager({ page, setPage }) {
  return (
    <div className="pager" aria-label="Card pages">
      {pages.map((_, index) => (
        <button
          className={page === index ? "active" : ""}
          key={index}
          onClick={() => setPage(index)}
          type="button"
          aria-label={`Go to page ${index + 1}`}
        />
      ))}
    </div>
  );
}

function SecretGallery({ onNext }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [wantsLife, setWantsLife] = useState("");
  const [keepsLife, setKeepsLife] = useState("");
  const [lockStep, setLockStep] = useState("login");
  const [touched, setTouched] = useState(false);

  const isLoginCorrect = username.trim() === "Mine" && password === "youandme";
  const areAnswersCorrect = wantsLife === "yes" && keepsLife === "yes";
  const isUnlocked = isLoginCorrect && areAnswersCorrect;
  const showHint = touched && !isUnlocked;

  if (isUnlocked) {
    return (
      <div className="secretReveal">
        <p className="psst">we will meet someday ~</p>
        <h2>and every memory will feel cozy again.</h2>
        <p className="caption">
          Until then, here is a tiny lavender room for every photo, every video,
          and every soft little reason I keep choosing you.
        </p>

        <div className="memoryWall" aria-label="Unlocked images and videos">
          {imageAssets.map((asset, index) => (
            <figure className={`memoryTile collage-${(index % 8) + 1}`} key={asset}>
              <img src={`${ASSET_BASE}${asset}`} alt={`Memory ${index + 1}`} loading="lazy" />
            </figure>
          ))}
          {videoAssets.map((asset, index) => (
            <figure className="memoryTile videoTile" key={asset}>
              <video src={`${ASSET_BASE}${asset}`} controls playsInline preload="metadata" />
              <figcaption>video {index + 1}</figcaption>
            </figure>
          ))}
        </div>

        <button className="openButton softPurple finalPageButton" type="button" onClick={onNext}>
          one last thing <span aria-hidden="true">💌</span>
        </button>
      </div>
    );
  }

  return (
    <div className="secretLock">
      <p className="psst">secret little place ~</p>
      <h2>unlock our memories</h2>
      <p className="caption">
        {lockStep === "login"
          ? "first, prove it is really you."
          : "now answer the tiny heart check."}
      </p>

      {lockStep === "login" && (
        <>
          <label>
            username
            <input
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              autoComplete="username"
            />
          </label>

          <label>
            password
            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              autoComplete="current-password"
              type="password"
            />
          </label>

          <button
            className="openButton softPurple unlockButton"
            type="button"
            onClick={() => {
              setTouched(true);
              if (isLoginCorrect) {
                setTouched(false);
                setLockStep("questions");
              }
            }}
          >
            next <span aria-hidden="true">💜</span>
          </button>
          {touched && !isLoginCorrect && <p className="lockHint">username or password is not right yet.</p>}
        </>
      )}

      {lockStep === "questions" && (
        <>
          <div className="secretQuestion">
            <p>do you want me in your life?</p>
            <div>
              <button className={wantsLife === "yes" ? "selected" : ""} onClick={() => setWantsLife("yes")} type="button">
                yes
              </button>
              <button className={wantsLife === "no" ? "selected no" : ""} onClick={() => setWantsLife("no")} type="button">
                no
              </button>
            </div>
          </div>

          <div className="secretQuestion">
            <p>will you do anything to keep me in your life?</p>
            <div>
              <button className={keepsLife === "yes" ? "selected" : ""} onClick={() => setKeepsLife("yes")} type="button">
                yes
              </button>
              <button className={keepsLife === "no" ? "selected no" : ""} onClick={() => setKeepsLife("no")} type="button">
                no
              </button>
            </div>
          </div>

          <div className="secretNav">
            <button className="backButton" type="button" onClick={() => setLockStep("login")}>
              back
            </button>
            <button className="openButton softPurple unlockButton" type="button" onClick={() => setTouched(true)}>
              unlock <span aria-hidden="true">🔐</span>
            </button>
          </div>
          {showHint && <p className="lockHint">both answers have to be yes.</p>}
        </>
      )}
    </div>
  );
}

function FinalChoicePage() {
  const [choiceAnswer, setChoiceAnswer] = useState("");
  const [submittedAnswer, setSubmittedAnswer] = useState("");
  const [showLetter, setShowLetter] = useState(false);
  const canSubmit = choiceAnswer.trim().length > 0;

  return (
    <div className="finalChoice">
      <p className="psst">one last question ~</p>
      <h2>will you always choose me?</h2>
      <p className="caption">write your heart here, then send it to me.</p>

      <label className="answerBox">
        your answer
        <textarea
          value={choiceAnswer}
          onChange={(event) => setChoiceAnswer(event.target.value)}
          placeholder="write it here..."
          rows="5"
        />
      </label>

      <button
        className="openButton softPurple unlockButton"
        type="button"
        disabled={!canSubmit}
        onClick={() => {
          if (!canSubmit) {
            return;
          }
          setSubmittedAnswer(choiceAnswer.trim());
          setShowLetter(true);
        }}
      >
        show my answer <span aria-hidden="true">💜</span>
      </button>

      {submittedAnswer && (
        <div className="answerDisplay">
          <p>your answer to me:</p>
          <strong>{submittedAnswer}</strong>
        </div>
      )}

      {showLetter && (
        <div className="letterOverlay" role="dialog" aria-modal="true" aria-label="Lovely letter">
          <div className="letterPopup">
            <p className="psst">my little letter ~</p>
            <h2>i choose you too.</h2>
            <p>
              I will keep choosing the soft parts, the silly parts, the quiet
              days, the hard days, and every version of us that still reaches
              for each other.
            </p>
            <p>
              Your answer is staying right here with me, like a tiny promise
              folded into lavender paper.
            </p>
            <button className="openButton softPurple" type="button" onClick={() => setShowLetter(false)}>
              keep it close <span aria-hidden="true">🫶</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function App() {
  const [page, setPage] = useState(0);
  const [answer, setAnswer] = useState("");

  const doodles = useMemo(
    () =>
      Array.from({ length: 30 }, (_, index) => ({
        id: index,
        type: doodleTypes[index % doodleTypes.length],
      })),
    []
  );

  const currentPage = pages[page];
  const goNext = () => setPage((value) => Math.min(value + 1, pages.length - 1));

  return (
    <main className="pageShell">
      <div className="topHandle" aria-hidden="true">
        <span />
      </div>

      <div className="doodleLayer" aria-hidden="true">
        {doodles.map((doodle) => (
          <Doodle key={doodle.id} index={doodle.id} type={doodle.type} />
        ))}
      </div>

      <section className={`loveCard page-${currentPage.kind}`} aria-label={`Cute love card page ${page + 1}`}>
        <CardDots />

        {currentPage.kind === "hello" && (
          <>
            <p className="psst">{currentPage.eyebrow}</p>
            <h1>
              Hi wifey
              <span className="miniHearts" aria-hidden="true">
                <i />
                <i />
              </span>
            </h1>
            <div className="helloWrap">
              <div className="helloText" aria-label="Hello">
                HELLO
              </div>
              <LittleBuddy />
            </div>
            <p className="smallNote">
              got a sec?
              <br />
              made this for you ~
            </p>
            <button className="openButton" type="button" onClick={goNext}>
              {currentPage.button}
              <span aria-hidden="true" className="mailIcon">
                <span />
              </span>
            </button>
          </>
        )}

        {currentPage.kind === "photo" && (
          <>
            <p className="psst">{currentPage.eyebrow}</p>
            <div className="photoFrame">
              <img src={PHOTO_SRC} alt="Her smiling selfie" />
            </div>
            <h2>{currentPage.title}</h2>
            <p className="caption">{currentPage.note}</p>
            <button className="openButton sunny" type="button" onClick={goNext}>
              {currentPage.button} <span aria-hidden="true">☀️</span>
            </button>
          </>
        )}

        {currentPage.kind === "bear" && (
          <>
            <SadBear />
            <h2>
              {currentPage.title} <span aria-hidden="true">{currentPage.emoji}</span>
            </h2>
            <p className="caption multiline">{currentPage.note}</p>
            <button className="openButton softPurple" type="button" onClick={goNext}>
              {currentPage.button} <span aria-hidden="true">💜</span>
            </button>
          </>
        )}

        {currentPage.kind === "question" && (
          <>
            <p className="psst">{currentPage.eyebrow}</p>
            <BunnyQuestion />
            <h2>{answer || currentPage.title}</h2>
            <div className="choiceStack">
              {currentPage.buttons.map((buttonText) => (
                <button
                  className={`openButton ${buttonText === "always" ? "softPurple" : ""}`}
                  key={buttonText}
                  type="button"
                  onClick={() => {
                    setAnswer(buttonText === "always" ? "always yours." : "yesss, mine.");
                    goNext();
                  }}
                >
                  {buttonText} <span aria-hidden="true">{buttonText === "always" ? "💜" : "💖"}</span>
                </button>
              ))}
            </div>
          </>
        )}

        {currentPage.kind === "kiss" && (
          <>
            <p className="psst">{currentPage.eyebrow}</p>
            <KissBear />
            <h2 className="kissTitle">
              {currentPage.title} <span aria-hidden="true">💋</span>
            </h2>
            <p className="caption multiline">{currentPage.note}</p>
            <button className="openButton sunny" type="button" onClick={goNext}>
              {currentPage.button} <span aria-hidden="true">🫶</span>
            </button>
          </>
        )}

        {currentPage.kind === "secret" && <SecretGallery onNext={goNext} />}

        {currentPage.kind === "choose" && <FinalChoicePage />}
      </section>

      <Pager page={page} setPage={setPage} />
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
