import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import items from '../sidebar/items';




function SidebarItem({ label, items, depthStep = 10, depth = 0, ...rest }) {
    return (
        <>
            <ListItem button dense {...rest}>
                <ListItemText style={{ paddingLeft: depth * depthStep }}>
                    <span>{label}</span>
                </ListItemText>
            </ListItem>
            {Array.isArray(items) ? (
                <List disablePadding dense>
                    {items.map((subItem) => (
                        <SidebarItem
                            key={subItem.name}
                            depth={depth + 3}
                            depthStep={depthStep}
                            {...subItem}
                        />
                    ))}
                </List>
            ) : null}
        </>
    )
}
function Sidebar({ depthStep, depth }) {
    return (
        <div className="sidebar">
            <List disablePadding dense>
                {items.map((sidebarItem, index) => (
                    <SidebarItem
                        key={`${sidebarItem.name}${index}`}
                        depthStep={depthStep}
                        depth={depth}
                        {...sidebarItem}
                    />
                ))}
            </List>
        </div>
    )
}
export default Sidebar; 