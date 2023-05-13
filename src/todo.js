export default function todo(
  Title,
  Description = "",
  Priority = "",
  Duedate = "",
  Completed = false
) {
  //const printFunc = () => console.log({ title, discripton, priority, duedate });
  return { Title, Description, Priority, Duedate, Completed };
}
