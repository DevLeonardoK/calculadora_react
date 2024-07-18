import { Container, Content, Row } from "./styles";
import Input from "./components/Input";
import Button from "./components/Button";
import { useState } from "react";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  //currentNumber === Número digitado antes da function
  const [firstNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState("");

  const handleAddNumber = (number) => {
    setCurrentNumber(
      (numeroPrevia) => `${numeroPrevia === "0" ? "" : numeroPrevia}${number}`
      //numeroPreviar === Trabalha como "currentNumber". Então se "currentNumber for igual a "0", string vazia e número selecionado, caso contrário, "numeroPrevia" é igual a currentNumber e manter o número anterior digitado.
    );
  };

  const handleSumNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      //currentNumber === "0"
      //setFirstNumber(String(currentNumber)) === Primeiro número antes da function = "0"
      setCurrentNumber("0");
      setOperation("+");
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation("");
      setFirstNumber("0");
    }
  };

  const handleMinusNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      //currentNumber === "0"
      //setFirstNumber(String(currentNumber)) === Primeiro número antes da function = "0"
      setCurrentNumber("0");
      //Segundo número não juntar com o anterior (firstNumber)
      setOperation("-");
    } else {
      const minus = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(minus));
      setOperation("");
      setFirstNumber("0");
    }
  };

  const handleMultiNumber = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("*");
    } else {
      const multi = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(multi));
      setOperation("");
      setFirstNumber("0");
    }
  };

  const handleSplitNumber = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("/");
    } else {
      const split = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(split));
      setOperation("");
      setFirstNumber("0");
    }
  };

  const handleDotNumber = () => {
    if (currentNumber !== "0") {
      handleAddNumber(".");
    } else if (currentNumber === "0") {
      handleAddNumber(currentNumber + ".");
    }
  };

  const handleEquals = () => {
    if (firstNumber !== "0" && operation !== "" && currentNumber !== "0") {
      switch (operation) {
        case "+":
          handleSumNumbers();
          break;
        case "-":
          handleMinusNumbers();
          break;
        case "*":
          handleMultiNumber();
          break;
        case "/":
          handleSplitNumber();
          break;
        default:
          break;
      }
    }
  };

  const handleClear = () => {
    setCurrentNumber("0");
    setFirstNumber("0");
    setOperation("");
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="*" onClick={handleMultiNumber} />
          <Button label="/" onClick={handleSplitNumber} />
          <Button label="C" onClick={handleClear} />
          <Button label="." onClick={handleDotNumber} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber("7")} />
          <Button label="8" onClick={() => handleAddNumber("8")} />
          <Button label="9" onClick={() => handleAddNumber("9")} />
          <Button label="-" onClick={handleMinusNumbers} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber("4")} />
          <Button label="5" onClick={() => handleAddNumber("5")} />
          <Button label="6" onClick={() => handleAddNumber("6")} />
          <Button label="+" onClick={handleSumNumbers} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber("1")} />
          <Button label="2" onClick={() => handleAddNumber("2")} />
          <Button label="3" onClick={() => handleAddNumber("3")} />
          <Button label="=" onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
