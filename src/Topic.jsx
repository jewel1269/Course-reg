

const Topic= ({selectedCourse, courseCredit, coursePrice}) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title text-xl font-semibold">Credit Hour Remaining: <span>7hr</span></h2>
   <hr />
    <div >
        <h1 className="text-2xl font-bold">Course Name: <span>{selectedCourse}</span></h1>


    </div>
    <hr />

    <h1 className="text-xl font-semibold">Total Credit Hour: <span id="jewel">{courseCredit}</span></h1>
    <hr />
    <h1 className="text-xl font-semibold">Total Price: {coursePrice} USD</h1>
  </div>
</div>
 </div>
    );
};

export default Topic;