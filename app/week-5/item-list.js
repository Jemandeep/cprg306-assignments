"use client";

import React, { useState, useEffect } from 'react';
import Item from './item';
import itemsData from './items.json';

const ItemList = () => {
    const [sortBy, setSortBy] = useState('name');
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(itemsData);
    }, []);

    const sortedItems = [...items].sort((a, b) => {
        if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortBy === 'category') {
            return a.category.localeCompare(b.category);
        }
        return 0;
    });

    const groupByCategory = items => {
        return items.reduce((acc, item) => {
            const category = item.category;
            if (!acc[category]) {
                acc[category] = [];
            }
            acc[category].push(item);
            return acc;
        }, {});
    };

    const groupedItems = groupByCategory(sortedItems);

    const buttonStyle = isActive => ({
        backgroundColor: isActive ? 'lightblue' : 'white',
        border: '1px solid black',
        padding: '10px 20px',
        margin: '5px',
        cursor: 'pointer',
        fontWeight: isActive ? 'bold' : 'normal',
    });

    return (
        <div>
            <div style={{ marginBottom: '20px' }}>
                <button
                    style={buttonStyle(sortBy === 'name')}
                    onClick={() => setSortBy('name')}
                >
                    Sort by Name
                </button>
                <button
                    style={buttonStyle(sortBy === 'category')}
                    onClick={() => setSortBy('category')}
                >
                    Sort by Category
                </button>
                <button
                    style={buttonStyle(sortBy === 'group')}
                    onClick={() => setSortBy('group')}
                >
                    Group by Category
                </button>
            </div>
            {sortBy === 'group' ? (
                Object.keys(groupedItems).map(category => (
                    <div key={category}>
                        <h2>{category}</h2>
                        <ul>
                            {groupedItems[category].map(item => (
                                <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
                            ))}
                        </ul>
                    </div>
                ))
            ) : (
                <ul>
                    {sortedItems.map(item => (
                        <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ItemList;
