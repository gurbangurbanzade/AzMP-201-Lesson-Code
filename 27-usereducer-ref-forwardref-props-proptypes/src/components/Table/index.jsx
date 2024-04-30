import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import Button from "react-bootstrap/Button";
import AddData from "./AddData";

const Tablex = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios("https://northwind.vercel.app/api/products").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);

  return (
    <>
      <AddData setData={setData} data={data} />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {data.map((elem) => {
            return (
              <tr key={uuidv4()}>
                <td>{elem.id}</td>
                <td>{elem.name}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => {
                      let arr = data.filter((el) => el.id != elem.id);
                      setData(arr);
                      axios.delete(
                        `https://northwind.vercel.app/api/products/${elem.id}`
                      );
                    }}
                  >
                    Delete
                  </Button>
                </td>
                <td>
                  <Button
                    variant="warning"
                    onClick={() => {
                      let newName = prompt(
                        `<${elem.name}> deyisdir`,
                        elem.name
                      );
                      // let newElem=data.find(el=>el.id==elem.id)

                      // newElem.name=newName

                      let arr = data.map((el) => {
                        if (el.id == elem.id) {
                          el.name = newName;
                        }
                        return el;
                      });
                      setData(arr);
                      axios.patch(
                        `https://northwind.vercel.app/api/products/${elem.id}`,
                        { name: newName }
                      );
                    }}
                  >
                    {" "}
                    Edit
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default Tablex;
