import { program } from "commander";
import fs from "fs";

program
  .name("wordCLI")
  .description("CLI to count words, letters and lines in a text file")
  .version("1.0.0");

program
  .command("letter")
  .description("Command to show number of letter in a file")
  .argument("<filePath>", "file Path")
  .action((filePath) => {
    const data = fs.readFileSync(filePath, "utf8");
    console.log(`The number of letter are: ${data.length}`);
  });

program
  .command("words")
  .description("Command to show number of words in a file")
  .argument("<filePath>", "file Path")
  .action((filePath) => {
    const data = fs.readFileSync(filePath, "utf8");
    console.log(`The number of words are: ${data.split(" ").length - 1}`);
  });

program
  .command("lines")
  .description("Command to show number of lines in a file")
  .argument("<filePath>", "file Path")
  .action((filePath) => {
    const data = fs.readFileSync(filePath, "utf8");
    console.log(`The number of letter are: ${data.split("/n").length}`);
  });


program
  .command("all")
  .description("Command to show number of lines , words and letters of a file")
  .argument("<filePath>", "file Path")
  .action((filePath) => {
    const data = fs.readFileSync(filePath, "utf8");
    console.log(`The number of letter are: ${data.length}`);
    console.log(`The number of words are: ${data.split(" ").length - 1}`);
    console.log(`The number of letter are: ${data.split("/n").length}`);
  });

program.parse();
