import React from "react";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import Footer from "./components/Footer";
import Greeting from "./components/Greeting";
import Card from "./components/Card";
import ProfileCard from "./components/ProfileCard";

const students = [
  { id: 1, name: 'ฝน', year: 3 },
  { id: 2, name: 'เต้ย', year: 2 },
  { id: 3, name: 'มายด์', year: 4 },
];

const members = [
  { id: 1, name: 'สมหญิง ใจดี', nickname: 'ฝน',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชาเขียว', 'แมว'] },
  { id: 2, name: 'อดัม นำโชค', nickname: 'ดำ',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['กาแฟ', 'ลิง'] },
    { id: 3, name: 'สมชาย หมายปอง', nickname: 'หาญ',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชาไทย', 'หมา'] }
];

function App() {
  return (
    <div className="container">
      <h1>สมาชิกกลุ่มของเรา</h1>
      <div className="card-row">
        {members.map((m) => (
          <ProfileCard
            key={m.id}
            name={m.name}
            nickname={m.nickname}
            major={m.major}
            favorites={m.favorites}
          />
        ))}
      </div>
    </div>
  );
}

export default App;