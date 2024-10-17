"use client"

const LikePage = () => {
    const handleClick = () => {
        alert("me")
    }
    return (
        <div onClick={() => handleClick()}>
            like page : with name
        </div>
    )
}

export default LikePage;