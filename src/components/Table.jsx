import React from "react";

const Table = ({ data }) => {
  return (
    <table className="border border-black w-full mx-auto text-center">
      <tr>
        <td>id</td>
        <td>Title</td>
        <td>Description</td>
      </tr>

      {data.map((el) => {
        return (
          <tr className="border border-black">
            <td>{el.id}</td>
            <td>{el.title}</td>
            <td>{el.body}</td>
          </tr>
        );
      })}
    </table>
  );
};

export default Table;
