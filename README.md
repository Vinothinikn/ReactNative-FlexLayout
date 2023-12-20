Layout with flexbox:
--------------------
FlexBox : flexContainer, flexItems

In React, main axis : left to right , cross axis: Top to bottom

But in ReactNative, its opposite - Main axis : top to bottom, Cross axis: left to right

In web - display:flex determines the div block to a flex container.In ReactNative, view component automatically set to a flex container.
Here View act as a flex container and items(<Box> inside the View consider as flex items.
<View style = {{backgroundColor: "plum"}></view> - will not display anything since, the View don't have children.
<View style = {{backgroundColor: "plum", flex : 1 }></view> - So we have to determine the flex to 1.

flexDirection: establishes the main axis ( top to bottom) and we can change the position using flexDirection property
column (top to bottom), column-reverse (bottom to top), row ( left to right), row-reverse (right to left)
 
justifyContent: defines the alignment along the main axis and spread the space
flex-start (place the item beginning of main axis), 
flex-end (place the item at the end), center(place the item center),space-between(space between the items),
space-around(there will be space start and end and between the items),space-evenly(evenly spread the space start,end and between items)

alignItems: default behaviour for laying out flex items along the container's cross-axis
stretch (default - stretch evenly left to right), flex-start(align to the left), 
flex-end(align to the right),center(align the items to the center of cross-axis)
baseline ( it aligns the items based on the text)

alignSelf: applied to individual items, and control the alignment of each item individually
flex-start (align to left), flex-end(align to right), center(align center), stretch(stretches left to right), auto (default) 
If the alignSelf : auto or no value (it inherits the value of the AlignItems property ie, if the AlignItems:stretch it stretches left to right) 

flexWrap: how flexItems behave where there is limited space within the flexContainer.
nowrap (default), wrap(items are wrapped with in the container), wrap-reverse (pushes the items to the previous column)

alignContent: aligns lines of content along the cross-axis. Similar to alignSelf
flex-start (to left), flex-end( to right), center(center), 
stretch(if alignContent:"stretch" is applied  and flexWrap:"wrap"- it wrap the items within the container,
space-between (space is applied between items), space-around(distribute the space around the items)

gap - manage space between rows and columns
rowgap(space between rows), columngap(space between column), gap(evenly distribute the space in rows and columns)

flexBasis - alternative for height and width properties in flex layouts. it determines the initial size before any extra space.
