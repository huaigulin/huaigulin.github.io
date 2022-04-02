import React from "react";
import Sketch from "react-p5";

export default () => {
  let py = 207;
  let scaleIdx = 1;
  let scaleIdx2 = 10;
  let translateX = 0;
  let translateY = 0;

  function setup(p5, canvasParentRef) {
    p5.createCanvas(400, 400).parent(canvasParentRef);
    p5.angleMode(p5.DEGREES);
  }
  function draw(p5) {
    // console.log(scaleIdx, scaleIdx2)
    p5.background("#282c34");

    // I. draw top wood
    // 1. top of cylinder
    p5.fill("#cc8552");
    p5.noStroke();
    p5.beginShape();
    p5.vertex(p5.width / 2 - 75, 100);
    p5.bezierVertex(
      p5.width / 2 - 73,
      80,
      p5.width / 2 + 73,
      80,
      p5.width / 2 + 75,
      100
    );
    p5.bezierVertex(
      p5.width / 2 + 73,
      120,
      p5.width / 2 - 73,
      120,
      p5.width / 2 - 75,
      100
    );
    p5.endShape();
    // 2. side of cylinder
    p5.fill("#8b5738");
    p5.noStroke();
    p5.beginShape();
    p5.vertex(p5.width / 2 - 75, 100);
    p5.bezierVertex(
      p5.width / 2 - 73,
      120,
      p5.width / 2 + 73,
      120,
      p5.width / 2 + 75,
      100
    );
    p5.line(p5.width / 2 + 75, 100, p5.width / 2 + 75, 115);
    p5.vertex(p5.width / 2 + 75, 115);
    p5.bezierVertex(
      p5.width / 2 + 73,
      140,
      p5.width / 2 - 73,
      140,
      p5.width / 2 - 75,
      115
    );
    p5.line(p5.width / 2 - 75, 115, p5.width / 2 - 75, 100);
    p5.endShape();

    // II. draw bottom wood
    // 1. top of cylinder
    p5.push();
    p5.translate(0, 200);
    p5.fill("#cc8552");
    p5.noStroke();
    p5.beginShape();
    p5.vertex(p5.width / 2 - 75, 100);
    p5.bezierVertex(
      p5.width / 2 - 73,
      80,
      p5.width / 2 + 73,
      80,
      p5.width / 2 + 75,
      100
    );
    p5.bezierVertex(
      p5.width / 2 + 73,
      120,
      p5.width / 2 - 73,
      120,
      p5.width / 2 - 75,
      100
    );
    p5.endShape();
    // 2. side of cylinder
    p5.fill("#8b5738");
    p5.noStroke();
    p5.beginShape();
    p5.vertex(p5.width / 2 - 75, 100);
    p5.bezierVertex(
      p5.width / 2 - 73,
      120,
      p5.width / 2 + 73,
      120,
      p5.width / 2 + 75,
      100
    );
    p5.line(p5.width / 2 + 75, 100, p5.width / 2 + 75, 115);
    p5.vertex(p5.width / 2 + 75, 115);
    p5.bezierVertex(
      p5.width / 2 + 73,
      140,
      p5.width / 2 - 73,
      140,
      p5.width / 2 - 75,
      115
    );
    p5.line(p5.width / 2 - 75, 115, p5.width / 2 - 75, 100);
    p5.endShape();
    p5.pop();

    // III. draw top sand
    p5.push();
    if (scaleIdx < 1.56) {
      scaleIdx = scaleIdx * 1.00064;
      translateX = 180 - 180 * (1 / scaleIdx) + (20 - 20 * (1 / scaleIdx));
      translateY = 180 - 180 * (1 / scaleIdx) + (28 - 28 * (1 / scaleIdx));
    } else if (scaleIdx < 1.8) {
      scaleIdx = scaleIdx * 1.00128;
      translateX = 180 - 180 * (1 / scaleIdx) + (20 - 20 * (1 / scaleIdx));
      translateY = 180 - 180 * (1 / scaleIdx) + (28 - 28 * (1 / scaleIdx));
    } else if (scaleIdx < 6) {
      scaleIdx = scaleIdx * 1.01024;
      translateX = 180 - 180 * (1 / scaleIdx) + (20 - 20 * (1 / scaleIdx));
      translateY = 180 - 180 * (1 / scaleIdx) + (28 - 28 * (1 / scaleIdx));
    } else if (scaleIdx < 8) {
      scaleIdx = scaleIdx * 1.02048;
      translateX = 180 - 180 * (1 / scaleIdx) + (20 - 20 * (1 / scaleIdx));
      translateY = 180 - 180 * (1 / scaleIdx) + (28 - 28 * (1 / scaleIdx));
    } else if (scaleIdx < 10) {
      scaleIdx = scaleIdx * 1.04096;
      translateX = 180 - 180 * (1 / scaleIdx) + (20 - 20 * (1 / scaleIdx));
      translateY = 180 - 180 * (1 / scaleIdx) + (28 - 28 * (1 / scaleIdx));
    } else {
      scaleIdx = 1;
      translateX = 1;
      translateY = 1;
    }
    p5.translate(translateX, translateY);
    p5.scale(1 / scaleIdx);
    // 1. top surface
    p5.fill("#ffca28");
    p5.noStroke();
    p5.beginShape();
    p5.vertex(p5.width / 2 - 55, 150);
    p5.bezierVertex(
      p5.width / 2 - 51,
      135,
      p5.width / 2 + 51,
      135,
      p5.width / 2 + 55,
      150
    );
    p5.bezierVertex(
      p5.width / 2 + 51,
      165,
      p5.width / 2 - 51,
      165,
      p5.width / 2 - 55,
      150
    );
    p5.endShape();
    // 2. funnel shape
    p5.fill("#e2a610");
    p5.noStroke();
    p5.beginShape();
    p5.vertex(p5.width / 2 - 55, 150);
    p5.bezierVertex(
      p5.width / 2 - 51,
      165,
      p5.width / 2 + 51,
      165,
      p5.width / 2 + 55,
      150
    );
    p5.vertex(p5.width / 2 + 55, 150);
    p5.bezierVertex(
      p5.width / 2 + 50,
      165,
      p5.width / 2 + 26,
      190,
      p5.width / 2,
      208
    );
    p5.vertex(p5.width / 2, 208);
    p5.bezierVertex(
      p5.width / 2 - 26,
      190,
      p5.width / 2 - 50,
      165,
      p5.width / 2 - 55,
      150
    );
    p5.endShape();
    p5.pop();

    // IV. draw animated sand stream
    for (let px = p5.width / 2 - 1; px < p5.width / 2 + 2; px += 0.01) {
      if (py < 300) {
        py += 1;
      } else {
        py = 207;
      }
      p5.stroke("#e2a610");
      p5.point(px, py);
    }

    // V. draw bottom sand
    p5.push();
    if (scaleIdx2 > 9) {
      scaleIdx2 = scaleIdx2 / 1.04096;
      translateX = 200 - 200 * (1 / scaleIdx2);
      translateY = 300 - 300 * (1 / scaleIdx2);
    } else if (scaleIdx2 > 7) {
      scaleIdx2 = scaleIdx2 / 1.02048;
      translateX = 200 - 200 * (1 / scaleIdx2);
      translateY = 300 - 300 * (1 / scaleIdx2);
    } else if (scaleIdx2 > 5) {
      scaleIdx2 = scaleIdx2 / 1.01024;
      translateX = 200 - 200 * (1 / scaleIdx2);
      translateY = 300 - 300 * (1 / scaleIdx2);
    } else if (scaleIdx2 > 2) {
      scaleIdx2 = scaleIdx2 / 1.00256;
      translateX = 200 - 200 * (1 / scaleIdx2);
      translateY = 300 - 300 * (1 / scaleIdx2);
    } else if (scaleIdx2 > 1) {
      scaleIdx2 = scaleIdx2 / 1.00128;
      translateX = 200 - 200 * (1 / scaleIdx2);
      translateY = 300 - 300 * (1 / scaleIdx2);
    } else {
      scaleIdx2 = 10;
      translateX = 1;
      translateY = 1;
    }
    p5.translate(translateX, translateY);
    p5.scale(1 / scaleIdx2);
    p5.fill("#ffca28");
    p5.noStroke();
    p5.beginShape();
    p5.vertex(p5.width / 2 - 53, 295);
    p5.bezierVertex(
      p5.width / 2 - 51,
      305,
      p5.width / 2 + 21,
      306,
      p5.width / 2 + 23,
      303
    );
    p5.vertex(p5.width / 2 + 23, 303);
    p5.bezierVertex(
      p5.width / 2 + 13,
      282,
      p5.width / 2 + 1,
      252,
      p5.width / 2,
      232
    );
    p5.vertex(p5.width / 2, 232);
    p5.bezierVertex(
      p5.width / 2 - 3,
      235,
      p5.width / 2 - 20,
      245,
      p5.width / 2 - 53,
      295
    );
    p5.endShape();
    p5.fill("#e2a610");
    p5.noStroke();
    p5.beginShape();
    p5.vertex(p5.width / 2 + 23, 303);
    p5.bezierVertex(
      p5.width / 2 + 13,
      282,
      p5.width / 2 + 1,
      252,
      p5.width / 2,
      232
    );
    p5.vertex(p5.width / 2, 232);
    p5.bezierVertex(
      p5.width / 2 + 3,
      235,
      p5.width / 2 + 20,
      245,
      p5.width / 2 + 53,
      295
    );
    p5.vertex(p5.width / 2 + 53, 295);
    p5.bezierVertex(
      p5.width / 2 + 51,
      300,
      p5.width / 2 + 25,
      304,
      p5.width / 2 + 23,
      303
    );
    p5.endShape();
    p5.pop();

    // VI. draw glass
    // 1. whole glass piece with transparent p5.fill color
    p5.fill("rgba(129, 212, 250, 0.4)");
    p5.noStroke();
    p5.beginShape();
    p5.vertex(p5.width / 2 - 65, 125);
    p5.bezierVertex(
      p5.width / 2 - 32,
      137,
      p5.width / 2 + 32,
      137,
      p5.width / 2 + 65,
      125
    );
    p5.vertex(p5.width / 2 + 65, 125);
    p5.bezierVertex(
      p5.width / 2 + 60,
      170,
      p5.width / 2 + 30,
      190,
      p5.width / 2 + 7,
      210
    );
    p5.vertex(p5.width / 2 + 7, 210);
    p5.bezierVertex(
      p5.width / 2 + 5,
      212,
      p5.width / 2 + 7,
      214,
      p5.width / 2 + 11,
      216
    );
    p5.vertex(p5.width / 2 + 11, 216);
    p5.bezierVertex(
      p5.width / 2 + 30,
      224,
      p5.width / 2 + 60,
      250,
      p5.width / 2 + 65,
      300
    );
    p5.vertex(p5.width / 2 + 65, 300);
    p5.bezierVertex(
      p5.width / 2 + 32,
      312,
      p5.width / 2 - 32,
      312,
      p5.width / 2 - 65,
      300
    );
    p5.vertex(p5.width / 2 - 65, 300);
    p5.bezierVertex(
      p5.width / 2 - 60,
      250,
      p5.width / 2 - 30,
      224,
      p5.width / 2 - 11,
      216
    );
    p5.vertex(p5.width / 2 - 11, 216);
    p5.bezierVertex(
      p5.width / 2 - 7,
      214,
      p5.width / 2 - 5,
      212,
      p5.width / 2 - 7,
      210
    );
    p5.vertex(p5.width / 2 - 7, 210);
    p5.bezierVertex(
      p5.width / 2 - 30,
      190,
      p5.width / 2 - 60,
      170,
      p5.width / 2 - 65,
      125
    );
    p5.endShape();
    // 2. add glare
    p5.push();
    p5.fill("rgba(255, 255, 255, 0.4)");
    p5.translate(p5.width / 2 - 36, 160);
    p5.rotate(54);
    p5.ellipse(0, 0, 48, 20);
    p5.pop();
    p5.push();
    p5.fill("rgba(255, 255, 255, 0.4)");
    p5.translate(p5.width / 2 - 36, 260);
    p5.rotate(126);
    p5.ellipse(0, 0, 48, 20);
    p5.pop();
  }

  return <Sketch setup={setup} draw={draw} />;
};
