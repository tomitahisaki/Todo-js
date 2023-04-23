import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};
// 未完了リストからの指定要素の削除
const deleteFromIncompleteList = (target) => {
  // 押されたボタンのdivを未完了リストから削除
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // li生成
  const li = document.createElement("li");
  li.innerText = text;

  // button生成と機能の追加
  const completeBtn = document.createElement("button");
  completeBtn.innerText = "完了";
  completeBtn.addEventListener("click", () => {
    // 押されたボタンのdivを未完了リストから削除
    deleteFromIncompleteList(completeBtn.parentNode);

    // TODOへ追加するための処理
    // 完了リストに追加する要素
    const addTarget = completeBtn.parentNode;
    // Todo内容の取得
    const text = addTarget.firstElementChild.innerText;
    // div以下の初期化
    addTarget.textContent = null;
    // liの生成
    const li = document.createElement("li");
    li.innerText = text;
    // button生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 押された戻すbtnの親タグを完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      // テキストの取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    // 初期化したdivタグに各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    // 完了リストへの追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "削除";
  deleteBtn.addEventListener("click", () => {
    deleteFromIncompleteList(deleteBtn.parentNode);
  });

  // divの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeBtn);
  div.appendChild(deleteBtn);

  // 未完了のulに追加する
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
