import lyricsReducer from "./../src/reducers/lyrics-reducer";

describe("test lyricsReducer", () => {
  let action;
  const testData = {
    lyrics: {
      1: {
        text: "Don't want to be a fool for you, Just another player in your game for two, You may hate me but it ain't no lie, Baby bye bye bye, Bye bye, I Don't want to make it tough, I just want to tell you that I've had enough, It might sound crazy but it ain't no lie, Baby bye bye bye".split(
          ","
        ),
        songId: 1
      },

      2: {
        text: "Twenty-five years and my life is still, Trying to get up that great big hill of hope, For a destination, I realized quickly when I knew I should, That the world was made up of this brotherhood of man, For whatever that means, And so I cry sometimes when I'm lying in bed, Just to get it all out what's in my head, And I, I am feeling a little peculiar, And so I wake in the morning and I step outside, And I take a deep breath and I get real high, and I Scream from the top of my lungs, What's going on?, And I say hey yeah yeah hey yeah yeah, I said hey what's going on?, And I say hey yeah yeah hey yeah yeah,I said hey what's going on?".split(
          ","
        ),
        songId: 2
      }
    },
    currentLine: 0,
    currentSong: null
  };

  test("update currentline", () => {
    action = {
      type: "UPDATE_CURRENT_LINE"
    };
    expect(lyricsReducer(testData, action)).toEqual({
      lyrics: testData.lyrics,
      currentLine: testData.currentLine + 1,
      currentSong: testData.currentSong
    });
  });

  test("pick song", () => {
    action = {
      type: "PICK_SONG"
    };
    expect(lyricsReducer(testData, action)).toEqual({
      lyrics: testData.lyrics,
      currentLine: testData.currentLine,
      currentSong: testData.lyrics[1]
    });
  });
});
