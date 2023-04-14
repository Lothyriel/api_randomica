import { salarioLiquido } from "../src/salarioLiquido";

describe('testing calculadora salario liquido', () => {
  test('4500', () => {
    const salario = salarioLiquido(4500);
    expect(salario.descontoTotal).toBe(729.92);
    expect(salario.salarioLiquido).toBe(3770.08)
  });
});