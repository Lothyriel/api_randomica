import { salarioLiquido } from "../src/salarioLiquido";

describe('testing index file', () => {
  test('empty string should result in zero', () => {
    const salario = salarioLiquido(4500);
    expect(salario.descontoTotal).toBe(729.92);
    expect(salario.salarioLiquido).toBe(3770.08)
  });
});