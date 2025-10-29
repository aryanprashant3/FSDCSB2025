// Assuming you have <div id="parent"></div> in your HTML
const parent = document.getElementById('parent');
const root = ReactDOM.createRoot(parent);

// Define content elements
const myname = <h2>Aryan Prashant</h2>;
const branch = <h2>CS</h2>;
const section = <h2>B</h2>;
const college = <h2>ABES Engineering College</h2>;

// --- MODIFICATION 1 ---
// Styling attributes like 'borderRadius' must be inside the 'style' prop (as an object).
// I also added 'alt' text (good for accessibility) and made the height 100px
// so that 'borderRadius: 50%' creates a perfect circle.
const pic = <img 
    src="Student.jpg" 
    alt="Student Profile"
    style={{ 
        width: '200px', 
        height: '200px', 
        borderRadius: '50%',
        alignItems:"center"
    }} 
/>;

// --- MODIFICATION 2 ---
// Added the requested background, border, and some padding to the container's style prop.
// Note: CSS properties like 'background-color' become 'backgroundColor' in React's style object.
const container = (
    <div style={{ 
        backgroundColor: 'grey', 
        border: '3px solid violet',
        padding: '20px', // Added padding so the content isn't against the edge
        borderRadius: '15px' // Added a radius to the container itself
    }}>
        {pic}
        {myname}
        {branch}
        {section}
        {college}
    </div>
);

// Render the final container
root.render(container);