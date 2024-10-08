export default function AddTodo(){
  return(
  <div class="container text-center">
  <div class="row ashu-row">
    <div class="col-6">
      <input type="text" placeholder="Enter your todo here" />
    </div>
      <div class="col-4"><input type="date" />
    </div>
    <div class="col-2">
      <button type="button" class="btn btn-success ashu-button">Add</button></div>
  </div>
</div>)
}