"use strict";
const data = {
  currentId: localStorage.getItem("currentID") || 0,
  service: [
    {
      id: 1,
      name: "Spotify",
      genre: "music",
      price: 980,
      imageUrl: "img/spotify.png"
    },
    {
      id:2,
      name: "Apple Music",
      genre: "music",
      price: 980,
      imageUrl: "img/appleMusic.png"
    }
  ]
};

// サブスクリプションサービスの一覧
const sS = [
  {
    name: "Spotify",
    genre: "music",
    price: 980,
    imageUrl: "img/spotify.png"
  },
  {
    name: "Apple Music",
    genre: "music",
    price: 980,
    imageUrl: "img/appleMusic.png"
  },
  {
    name: "Google Play Music",
    genre: "music",
    price: 980,
    imageUrl: "img/googlePlay.png"
  },
  {
    name: "Amazon Music",
    genre: "music",
    price: 980,
    imageUrl: "img/amzonMusic.jpg"
  },
  { name: "AWA", genre: "music", price: 960, imageUrl: "img/awa.png" },
  {
    name: "LINE Music",
    genre: "music",
    price: 960,
    imageUrl: "img/lineMusic.png"
  },
  {
    name: "Netflix",
    genre: "movie",
    price: 980,
    imageUrl: "img/netflix.png"
  },
  { name: "Hulu", genre: "movie", price: 1026, imageUrl: "img/hulu.png" },
  {
    name: "U-Next",
    genre: "movie",
    price: 1990,
    imageUrl: "img/uNext.png"
  },
  {
    name: "Prime Video",
    genre: "movie",
    price: 500,
    imageUrl: "img/amazonPrime.png"
  },
  { name: "dTV", genre: "movie", price: 500, imageUrl: "img/dTV.png" },
  {
    name: "ビデオパス",
    genre: "movie",
    price: 562,
    imageUrl: "img/videoPass.png"
  },
  {
    name: "Progate",
    genre: "programming",
    price: 980,
    imageUrl: "img/progate.png"
  },
  {
    name: "ドットインストール",
    genre: "programming",
    price: 1088,
    imageUrl: "img/dotinstall.png"
  },
  {
    name: "Aidemy",
    genre: "programming",
    price: 3000,
    imageUrl: "img/aidemy.jpg"
  },
  {
    name: "Paiza",
    genre: "programming",
    price: 500,
    imageUrl: "img/paiza.png"
  }
];

var allLabels = [];
var dashServiceName;

console.log(sS);

const genreSele = document.getElementById("subsc-type-select").value;
console.log(genreSele);

$(function() {
  $("#search-go").on("click", function() {
    // セレクトボックスで取得した値と一致するオブジェクトを集約した新しい配列を作る
    const ge = document.getElementById("subsc-type-select").value;
    console.log(ge);
    const result = sS.filter(x => x.genre === ge);
    console.log(result);

    const subItems = document.querySelector(".sub-items");

    for (let i = 0; i < result.length; i++) {
      // 一番の親要素であるsub-itemクラスのdiv作成
      const div1 = document.createElement("div");
      div1.classList.add("sub-item");
      subItems.appendChild(div1);
      // その子要素であるsetsumeiクラスの作成
      const div2 = document.createElement("div");
      div2.classList.add("setsumei");
      div1.appendChild(div2);
      // サービス名となるh1の作成
      const h1 = document.createElement("h1");
      h1.textContent = result[i].name;
      div2.appendChild(h1);
      // // サービスアイコンの表示
      const serviceLogo = document.createElement("img");
      serviceLogo.src = result[i].imageUrl;
      div2.insertBefore(serviceLogo, h1);
      // 月額料金を表示するh2の作成
      const h2 = document.createElement("h2");
      h2.textContent = `月額料金：${result[i].price}円`;
      div2.appendChild(h2);
      // 利用頻度を選択してくださいがはいるpの作成
      const p = document.createElement("p");
      p.textContent = "利用頻度を選択して下さい";
      div2.appendChild(p);
      // 利用頻度をこたえるためのselect1ボックスの作成
      const select1 = document.createElement("select");
      select1.id = "hindo";
      select1.classList.add("monthOrWeek");
      const option1 = document.createElement("option");
      option1.value = "month";
      option1.textContent = "月";
      const option2 = document.createElement("option");
      option2.value = "week";
      option2.textContent = "週";
      div2.appendChild(select1);
      select1.appendChild(option1);
      select1.appendChild(option2);
      // 見分けるためのクラスをつける
      if (ge === "music") {
        select1.classList.add(i);
      } else if (ge === "movie") {
        select1.classList.add(`${i + 6}`);
      } else {
        select1.classList.add(`${i + 12}`);
      }
      // 利用頻度をこたえるためのselect2ボックスの作成
      const select2 = document.createElement("select");
      select2.id = "hindo";
      select2.classList.add("daysSelect");
      div2.appendChild(select2);
      for (let s = 1; s < 8; s++) {
        const option = document.createElement("option");
        option.value = s;
        option.textContent = s;
        select2.appendChild(option);
      }
      if (ge === "music") {
        select2.classList.add(i);
      } else if (ge === "movie") {
        select2.classList.add(`${i + 6}`);
      } else if (ge === "programming") {
        select2.classList.add(`${i + 12}`);
      }
      // sub-itemクラスの子要素であるbuttonの作成
      const btn = document.createElement("button");
      btn.textContent = "追加する";
      btn.classList.add("addSection");
      if (ge === "music") {
        btn.classList.add(i);
      } else if (ge === "movie") {
        btn.classList.add(`${i + 6}`);
      } else {
        btn.classList.add(`${i + 12}`);
      }
      div1.appendChild(btn);
    }
    // result-modalクラスをだす
    $(".result-modal").fadeIn();

    var class_name;

    // var localData = [];
    // モーダル上で追加ボタンが押された時の挙動
    $(".addSection").on("click", function() {
      var class_name = $(this).attr("class");
       console.log (class_name);
      console.log("btnが押されました");
      const addList = document.getElementById("add-list");
      const kakoiDiv = document.createElement("div");
      kakoiDiv.classList.add("add-item");
      addList.appendChild(kakoiDiv);
      const serviceLogo = document.createElement("img");
      kakoiDiv.appendChild(serviceLogo);
      const p1 = document.createElement("p");
      kakoiDiv.appendChild(p1);
      const p2 = document.createElement("p");
      kakoiDiv.appendChild(p2);
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "削除";
      deleteBtn.classList.add("deleteBtn");
      kakoiDiv.appendChild(deleteBtn);

      // .addSection以外になんのクラスを持っているかによって条件分岐
      for (let n = 0; n < 16; n++) {
        if (class_name.includes(n)) {
          console.log(n);
          console.log(sS);
          console.log(sS[n]);
          serviceLogo.src = sS[n].imageUrl;
          p1.textContent = sS[n].name;
          kakoiDiv.classList.add(`${n}`);
          deleteBtn.classList.add(`${n}`);
          var monthOrWeek = $(".monthOrWeek" + `.${n} option:selected`).text();
          var daysSelect = $(".daysSelect" + `.${n} option:selected`).text();
          p2.textContent = `${monthOrWeek}${daysSelect}回利用`;
          // ダッシュボード上で使うラベルの収集
          if (monthOrWeek === "週") {
            daysSelect *= 4;
          }
          const labelItems = {
            name: sS[n].name,
            price: sS[n].price,
            often: daysSelect
          };
          allLabels.push(labelItems);
          console.log(allLabels);
          var dashServiceName = [];
          var dashServicePrice = [];
          var dashServiceOften = [];
          var dashServicePer = [];
          for (let k = 0; k < allLabels.length; k++) {
            console.log("実行しています");
            dashServiceName.push(allLabels[k].name);
            dashServicePrice.push(allLabels[k].price);
            dashServiceOften.push(allLabels[k].often);
            dashServicePer.push(allLabels[k].price / allLabels[k].often);
          }
          console.log(dashServiceName);
          dashServicePrice = dashServicePrice.map(str => parseInt(str, 10));
          dashServiceOften = dashServiceOften.map(str => parseInt(str, 10));
          console.log(dashServicePrice);
          // 合計金額の計算
          const totalMoney = document.getElementById("totalMoney");
          let moneyadd = 0;
          for (let b = 0; b < allLabels.length; b++) {
            console.log(`${b}回目です`);
            moneyadd += allLabels[b].price;
          }
          totalMoney.textContent = `合計料金：${moneyadd}円`;

          // var monthOrWeek = document.querySelector(".monthOrWeek");
          // var idx1 = monthOrWeek.selectedIndex;
          // var txt1 = monthOrWeek[idx1].text;
          // var daysSelect = document.querySelector(".daysSelect");
          // var idx2 = daysSelect.selectedIndex;
          // var txt2 = daysSelect[idx2].text;
          // p2.textContent = `${txt1}${txt2}回利用`;

          // localStorageにこの内容を保存する / したい;
          var localData = {
            imgData: serviceLogo.src,
            p1: p1.textContent,
            p2: `${monthOrWeek}${daysSelect}回利用`,
            btnText: "削除"
          };
          const localLabel = [];
          localLabel.push(localData);
          localStorage.setItem(`${n}`, JSON.stringify(localLabel));

          // ページ読み込み時に情報取得。表示
          // for (let i = 0; i < localStorage.length; i++) {
          //   const key = localStorage.key(i);
          //   const value = localStorage.getItem(key);
          //   //一覧表示
          //   const html =
          //     `<div class="add-item"><img src=${value.imgData}><p>` +
          //     `${value.p1}` +
          //     "</p><p>" +
          //     value.p2 +
          //     "</p><button>削除</button></div>";
          //   $("#add-list").append(html);
          // }
          // 削除ボタンを押すとaddSection一覧から当該サービスを消す,localDataからも消す
          $(".deleteBtn" + `.${n}`).on("click", function() {
            console.log("deletebtnが押されました");
            $(".add-item" + `.${n}`).remove();
          });

          // return;
        }
      }

      var ctx1 = document.getElementById("pie_price").getContext("2d");
      var myPieChart = new Chart(ctx1, {
        type: "pie",
        data: {
          labels: dashServiceName,
          datasets: [
            {
              data: dashServicePrice,
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)"
              ],
              borderColor: [
                "rgba(255,99,132,1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)"
              ],
              borderWidth: 1
            }
          ]
        },
        options: {
          title: {
            display: true,
            text: "月額料金内訳"
          }
        }
      });

      var ctx = document.getElementById("bar_howOften").getContext("2d");
      var myChart2 = new Chart(ctx, {
        type: "bar",
        data: {
          labels: dashServiceName,
          datasets: [
            {
              label: "利用頻度",
              data: dashServiceOften,
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)"
              ],
              borderColor: [
                "rgba(255,99,132,1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)"
              ],
              borderWidth: 1
            }
          ]
        },
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          }
        }
      });

      var ctx = document.getElementById("myChart").getContext("2d");
      var myChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: dashServiceName,
          datasets: [
            {
              label: "一回当たりの利用料金",
              data: dashServicePer,
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)"
              ],
              borderColor: [
                "rgba(255,99,132,1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)"
              ],
              borderWidth: 1
            }
          ]
        },
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          }
        }
      });
    });
  });

  // モーダルから選択画面に戻り、かつsub-itemsの子要素を全て削除する
  $("#return-btn").on("click", function() {
    const subItems = document.querySelector(".sub-items");
    while (subItems.lastChild) {
      subItems.removeChild(subItems.lastChild);
    }
    $(".result-modal").fadeOut();
  });

  $("#visualization-btn").on("click", function() {
    $(".dashboard-modal").fadeIn(1000);
  });

  // allLabelsに一致するオブジェクトを見つける
  var dashServiceName;

  // ダッシュボード内のグラフの描画
  // var ctx = document.getElementById("pie_price").getContext("2d");
  // var myChart1 = new Chart(ctx, {
  //   type: "pie",
  //   data: {
  //     labels: dashServiceName,
  //     datasets: [
  //       {
  //         label: "月額料金",
  //         data: [900, 1200, 450, 500, 230, 300],
  //         backgroundColor: [
  //           "rgba(255, 99, 132, 0.2)",
  //           "rgba(54, 162, 235, 0.2)",
  //           "rgba(255, 206, 86, 0.2)",
  //           "rgba(75, 192, 192, 0.2)",
  //           "rgba(153, 102, 255, 0.2)",
  //           "rgba(255, 159, 64, 0.2)"
  //         ],
  //         borderColor: [
  //           "rgba(255,99,132,1)",
  //           "rgba(54, 162, 235, 1)",
  //           "rgba(255, 206, 86, 1)",
  //           "rgba(75, 192, 192, 1)",
  //           "rgba(153, 102, 255, 1)",
  //           "rgba(255, 159, 64, 1)"
  //         ],
  //         borderWidth: 1
  //       }
  //     ]
  //   },
  //   options: {
  //     scales: {
  //       yAxes: [
  //         {
  //           ticks: {
  //             beginAtZero: true
  //           }
  //         }
  //       ]
  //     }
  //   }
  // });

  // var ctx = document.getElementById("bar_howOften").getContext("2d");
  // var myChart2 = new Chart(ctx, {
  //   type: "bar",
  //   data: {
  //     labels: allLabels.name,
  //     datasets: [
  //       {
  //         label: "利用頻度",
  //         data: [900, 1200, 450, 500, 230, 300],
  //         backgroundColor: [
  //           "rgba(255, 99, 132, 0.2)",
  //           "rgba(54, 162, 235, 0.2)",
  //           "rgba(255, 206, 86, 0.2)",
  //           "rgba(75, 192, 192, 0.2)",
  //           "rgba(153, 102, 255, 0.2)",
  //           "rgba(255, 159, 64, 0.2)"
  //         ],
  //         borderColor: [
  //           "rgba(255,99,132,1)",
  //           "rgba(54, 162, 235, 1)",
  //           "rgba(255, 206, 86, 1)",
  //           "rgba(75, 192, 192, 1)",
  //           "rgba(153, 102, 255, 1)",
  //           "rgba(255, 159, 64, 1)"
  //         ],
  //         borderWidth: 1
  //       }
  //     ]
  //   },
  //   options: {
  //     scales: {
  //       yAxes: [
  //         {
  //           ticks: {
  //             beginAtZero: true
  //           }
  //         }
  //       ]
  //     }
  //   }
  // });

  // var ctx = document.getElementById("myChart").getContext("2d");
  // var myChart = new Chart(ctx, {
  //   type: "line",
  //   data: {
  //     labels: allLabels,
  //     datasets: [
  //       {
  //         label: "月額料金",
  //         data: [900, 1200, 450, 500, 230, 300],
  //         backgroundColor: [
  //           "rgba(255, 99, 132, 0.2)",
  //           "rgba(54, 162, 235, 0.2)",
  //           "rgba(255, 206, 86, 0.2)",
  //           "rgba(75, 192, 192, 0.2)",
  //           "rgba(153, 102, 255, 0.2)",
  //           "rgba(255, 159, 64, 0.2)"
  //         ],
  //         borderColor: [
  //           "rgba(255,99,132,1)",
  //           "rgba(54, 162, 235, 1)",
  //           "rgba(255, 206, 86, 1)",
  //           "rgba(75, 192, 192, 1)",
  //           "rgba(153, 102, 255, 1)",
  //           "rgba(255, 159, 64, 1)"
  //         ],
  //         borderWidth: 1
  //       }
  //     ]
  //   },
  //   options: {
  //     scales: {
  //       yAxes: [
  //         {
  //           ticks: {
  //             beginAtZero: true
  //           }
  //         }
  //       ]
  //     }
  //   }
  // });

  $("#return-btn2").on("click", function() {
    $(".dashboard-modal").fadeOut(1000);
  });
});
