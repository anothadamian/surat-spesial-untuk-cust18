import assert from "node:assert/strict";
import test from "node:test";
import { formatTime, startLetterMusic, revealLetterMusic } from "./experience-utils.ts";

test("player time is readable", () => {
  assert.equal(formatTime(0), "0:00");
  assert.equal(formatTime(190), "3:10");
  assert.equal(formatTime(Number.NaN), "0:00");
});

test("opening the letter starts playback silently, then reveals the volume", async () => {
  let played = false;
  const audio = { currentTime: 42, volume: 1, play: async () => { played = true; } };
  await startLetterMusic(audio);
  assert.equal(played, true);
  assert.equal(audio.currentTime, 0);
  assert.equal(audio.volume, 0);
  revealLetterMusic(audio);
  assert.equal(audio.volume, 0.65);
});
