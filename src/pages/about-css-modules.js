import React from 'react';
import styles from './about-css-modules.module.css';
import Container from '../components/container';

console.log(styles);

const User = props => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
);

export default function Aboudt() {
  return (
    <Container>
      <h1>CSS モジュールについて</h1>
      <p>CSSモジュールは良いよ！</p>
      <User
        username="Tomoya"
        avatar="https://images.pexels.com/photos/1368857/pexels-photo-1368857.jpeg?cs=srgb&dl=pexels-1368857.jpg&fm=jpg"
        excerpt="私は朋哉です。よろしくお願いします。"
      />
      <User
        username="Yuuko"
        avatar="https://get.pxhere.com/photo/avatar-people-person-business-user-woman-character-set-icon-portrait-profile-pictograph-hairstyle-coat-fashion-neck-peaceful-head-face-design-concept-symbol-smile-casual-elements-hair-facial-expression-man-nose-cartoon-beauty-cheek-male-forehead-shoulder-girl-emotion-human-arm-mouth-hand-joint-brown-hair-finger-long-hair-illustration-human-behavior-clip-art-silhouette-1447677.jpg"
        excerpt="私は優子です。おはようございます。"
      />
    </Container>
  );
}
