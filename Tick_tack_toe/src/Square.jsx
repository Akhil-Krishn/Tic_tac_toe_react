export default function Square({ value, change }) {
    return (
        <button
            className="btn btn-primary"
            onClick={change}
            style={{ width: "75px", height: "75px", fontSize: "30px" }}
        >
            {value}
        </button>
    );
}
