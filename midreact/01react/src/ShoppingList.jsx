import React from "react";
import { useState } from "react";

function ShoppingList() {
    const [item, setItem] = useState([{ id: 0, name: "item1", quantity: 2 }]);
    const [nameQuantity, setNameQuantity] = useState({
        name: "",
        quantity: "",
    });
    const [editId, setEditId] = useState(null);
    const [editItem, setEditItem] = useState(null);

    const handleSubmit = () => {
        if (nameQuantity?.name && nameQuantity?.quantity) {
            const id = Date.now();
            const itm = { id, ...nameQuantity };

            setItem((prevState) => [...prevState, itm]);
            setNameQuantity({ name: "", quantity: "" });
        }
    };

    const saveEdit = (id) => {
        setItem(
            item.map((el) => {
                if (el.id == id) {
                    el.name = editItem.name;
                    el.quantity = editItem.quantity;
                    return el;
                }
                return el;
            })
        );
        setEditId(null);
        setEditItem(null);
    };

    const deleteItem = (id) => {
        setItem(item.filter(el => el.id != id))
    };

    return (
        <>
            items : {JSON.stringify(item)}
            <br />
            item value : {JSON.stringify(nameQuantity)}
            <br />
            editId : {JSON.stringify(editId)}
            <br />
            editItem: {JSON.stringify(editItem)}
            <br />
            <h2>Shopping List</h2>
            {/* Input Section  */}
            <div>
                <input
                    type="text"
                    placeholder="Item Name"
                    value={nameQuantity.name}
                    onChange={(e) =>
                        setNameQuantity((prevState) => ({
                            ...prevState,
                            name: e.target.value,
                        }))
                    }
                />
                <input
                    type="number"
                    placeholder="Item Quantity"
                    value={nameQuantity.quantity}
                    onChange={(e) =>
                        setNameQuantity((prevState) => ({
                            ...prevState,
                            quantity: parseInt(e.target.value, 10),
                        }))
                    }
                />
                <button onClick={handleSubmit}>Submit</button>
            </div>
            <br />
            {/* Showing item in table  */}
            <table>
                <tr>
                    <th>S.N.</th>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Action</th>
                </tr>
                {item?.map((el, index) => (
                    <tr key={el.id}>
                        <td>{index}</td>
                        <td>
                            {el.id == editId ? (
                                <input
                                    type="text"
                                    value={editItem.name}
                                    onChange={(e) =>
                                        setEditItem((prevState) => ({
                                            ...prevState,
                                            name: e.target.value,
                                        }))
                                    }
                                />
                            ) : (
                                <p>{el.name}</p>
                            )}
                        </td>
                        <td>
                            {editId == el.id ? (
                                <input
                                    type="number"
                                    value={editItem.quantity}
                                    onChange={(e)=>setEditItem(prevState=>({...prevState,quantity:Number(e.target.value)}))}
                                />
                            ) : (
                                el.quantity
                            )}
                        </td>

                        <td>
                            {editId == el.id ? (
                                <button onClick={() => saveEdit(el.id)}>
                                    Save
                                </button>
                            ) : (
                                <button
                                    onClick={() => {
                                        setEditId(el.id);
                                        setEditItem(el);
                                    }}
                                >
                                    Edit
                                </button>
                            )}{" "}
                            <button onClick={(e)=>deleteItem(el.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </table>
        </>
    );
}

export default ShoppingList;
