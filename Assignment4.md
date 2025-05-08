This exercise will guide you through the query operations using MongoDB's command-line
interface (mongosh) or MongoDB Compass. The sample data is available in the Assignment 4
text file.
Scenario:
One-to-Many Relationship
A library has multiple books. Each book belongs to one library, but each library can have many
books.
Many-to-Many Relationship
Books can have multiple authors, and authors can write multiple books.

 1.Create a Database Library
<img width="481" alt="1" src="https://github.com/user-attachments/assets/6ab347b8-bc91-4abc-8a31-1a70c3a25fad" />

 
2.Create collections named libraries, books and authors.
<img width="648" alt="2" src="https://github.com/user-attachments/assets/fca921a4-2126-4991-be0f-5a1540800165" />

3.Insert some sample documents into the collections.
<img width="709" alt="3 1" src="https://github.com/user-attachments/assets/be540ce5-bc66-4d57-aaef-e324a10184ba" />
<img width="610" alt="3 2" src="https://github.com/user-attachments/assets/8e73e683-66b5-43a5-b9f1-92ae9b1772d9" />

4.Find all books in the "Central Library"
<img width="566" alt="4" src="https://github.com/user-attachments/assets/3cb40e84-70eb-4de9-bf89-a47813f3b109" />

5.List all libraries along with the number of books they have.
<img width="557" alt="5" src="https://github.com/user-attachments/assets/4393e8b8-33b3-4e2f-8536-4b9616660f7d" />

6.Find all books written by "J.K. Rowling".
<img width="396" alt="6" src="https://github.com/user-attachments/assets/82cba7cf-64f9-41a3-8655-57febd1e7e54" />

7.List all authors along with the books they have written
<img width="557" alt="7" src="https://github.com/user-attachments/assets/212f7fce-826d-4028-bf5b-b813c08be801" />

8.Find all books along with their authors' details.
<img width="707" alt="8" src="https://github.com/user-attachments/assets/251147f0-43aa-4dc3-8d7d-23b5415917b7" />

9. List all libraries and the number of books they have, including libraries with no books.
  <img width="707" alt="9" src="https://github.com/user-attachments/assets/1abf5ec3-ad56-4908-b2a7-25ff437be829" />

10.Calculate the average number of books per library.
<img width="683" alt="10" src="https://github.com/user-attachments/assets/aab4b0c3-1637-4ead-8790-14b9794b266c" />

11.Find all authors who have written more than one book
<img width="700" alt="11" src="https://github.com/user-attachments/assets/5c5f0a58-f005-44a2-8c53-d2d394102459" />

12.. Retrieve all books along with their authors' names and the library they belong to.
<img width="731" alt="12" src="https://github.com/user-attachments/assets/6d94912b-d36b-45b3-8ccd-cafe35ca3d90" />

13.List all authors who have not written any books
<img width="718" alt="13" src="https://github.com/user-attachments/assets/54cdc18e-8e66-4e40-96ac-bceab0617431" />
