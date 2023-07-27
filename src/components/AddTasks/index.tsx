import React, { useState } from 'react';
import './index.scss';
import { useAddProductMutation } from '../../redux';
import Button from '../Button';
import Input from '../Input';
import { COLOR_TYPES } from '../../library/constants.enum';
import { date, dateNow } from '../../library/interfaces';

const AddTasks = () => {
    const [newProduct, setNewProduct] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newDate, setNewDate] = useState([]);
    const [addProduct, { isError }] = useAddProductMutation();

    const handleAddProduct = async () => {
        if (newProduct) {
            await addProduct({
                name: newProduct,
                email: newEmail,
                date: dateNow,
            }).unwrap();
            setNewProduct('');
            setNewEmail('');
            setNewDate([]);
        }
    };

    return (
        <div className="AddTasks" onClick={(e) => e.stopPropagation()}>
            <Input
                type="text"
                placeholder="Добавьте задачу"
                value={newProduct}
                onChange={(e) => setNewProduct(e.target.value)}
            />
            <Button onClick={handleAddProduct} type={COLOR_TYPES.info} text="Добавить" />
        </div>
    );
};

export default AddTasks;
