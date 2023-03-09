function mailTemplate(name,menu) {
    console.log(`${name}さん,今日のランチは${menu}にしましょう。`); // 文字列の中で引数で受け取ったnameを展開しています
  }
  mailTemplate("加藤","うどん"); // 名前が鈴木さんに変更され出力
  