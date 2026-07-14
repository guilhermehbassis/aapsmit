export default {

  isPrioritario(row) {

    const valor = Number(row.valor_estimado);

    const status = row.status;

    const cadastro = new Date(row.criado_em);

    const hoje = new Date();

    const dias =
      (hoje - cadastro) / (1000 * 60 * 60 * 24);

    return valor > 50000 ||
           (status == "Novo" && dias > 3);

  }

}