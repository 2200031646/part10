function Hello({student})
{
    return(
        <div>
            <h1> Student data </h1>
            <table border="5" align="center">
            <tr>
                <td>Stuid  </td>
                <td>Student Name</td>  
                <td>Branch </td>
            </tr>
            <tr>
                <td>{student[0].stuid}</td>
                <td>{student[0].stuname}</td>
                <td>{student[0].branch}</td>
            </tr>
            <tr>
                <td>{student[1].stuid}</td>
                <td>{student[1].stuname}</td>
                <td>{student[1].branch}</td>
            </tr>
            <tr>
                <td>{student[2].stuid}</td>
                <td>{student[2].stuname}</td>
                <td>{student[2].branch}</td>
            </tr>
            <tr>
                <td>{student[3].stuid}</td>
                <td>{student[3].stuname}</td>
                <td>{student[3].branch}</td>
            </tr>
            <tr>
                <td>{student[4].stuid}</td>
                <td>{student[4].stuname}</td>
                <td>{student[4].branch}</td>
            </tr>
            <tr>
                <td>{student[5].stuid}</td>
                <td>{student[5].stuname}</td>
                <td>{student[5].branch}</td>
            </tr>
            </table>
        </div>
    )
}
export default Hello