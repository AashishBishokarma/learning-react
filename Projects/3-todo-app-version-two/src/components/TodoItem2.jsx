export default function Todoitem2() {
  let todoName = "Go to College";
  let todoDate = "4/10/2023";

  return (
    <div class="container ">
      <div class="row ashu-row">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger ashu-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
