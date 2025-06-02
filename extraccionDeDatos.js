module.exports.extraerEstudiantesHombres = (conn, callback) => {
    const resultados = {};
  
    conn.query(`
      SELECT nombre, tiempo_total, genero, categoria, RFID, idParticipante
      FROM participantes
      WHERE categoria = 'estudiantil' AND genero = 'Masculino'
      ORDER BY tiempo_total ASC
      LIMIT 3
    `, (err, rows) => {
      if (err) return callback(err);
  
      resultados.estudiantil = rows;
  
      conn.query(`
        SELECT nombre, tiempo_total, genero, categoria, RFID, idParticipante
        FROM participantes
        WHERE categoria = 'administrativo' AND genero = 'Masculino'
        ORDER BY tiempo_total ASC
        LIMIT 3
      `, (err, rows) => {
        if (err) return callback(err);
  
        resultados.administrativo = rows;
  
        conn.query(`
          SELECT nombre, tiempo_total, genero, categoria, RFID, idParticipante
          FROM participantes
          WHERE categoria = 'libre' AND genero = 'Masculino'
          ORDER BY tiempo_total ASC
          LIMIT 3
        `, (err, rows) => {
          if (err) return callback(err);
  
          resultados.libre = rows;
  
          // Devolver todos los resultados
          callback(null, resultados);
        });
      });
    });
  };
  




/*module.exports.extraerEstudiantesHombres = async (conn) => {
    const estudiantil = await conn.query(`
      SELECT nombre, tiempo_total, genero, categoria, RFID, idParticipante
      FROM participantes
      WHERE categoria = 'estudiantil' AND genero = 'Masculino'
      ORDER BY tiempo_total ASC
      LIMIT 3
    `);
  
    const administrativo = await conn.query(`
      SELECT nombre, tiempo_total, genero, categoria, RFID, idParticipante
      FROM participantes
      WHERE categoria = 'administrativo' AND genero = 'Masculino'
      ORDER BY tiempo_total ASC
      LIMIT 3
    `);
  
    const libre = await conn.query(`
      SELECT nombre, tiempo_total, genero, categoria, RFID, idParticipante
      FROM participantes
      WHERE categoria = 'libre' AND genero = 'Masculino'
      ORDER BY tiempo_total ASC
      LIMIT 3
    `);
  
    return { estudiantil, administrativo, libre };
  };
  
  
  module.exports.extraerEstudiantesMujeres = async (conn) => {
    const estudiantil = await conn.query(`
      SELECT nombre, tiempo_total, genero, categoria, RFID, idParticipante
      FROM participantes
      WHERE categoria = 'estudiantil' AND genero = 'Femenino'
      ORDER BY tiempo_total ASC
      LIMIT 3
    `);
  
    const administrativo = await conn.query(`
      SELECT nombre, tiempo_total, genero, categoria, RFID, idParticipante
      FROM participantes
      WHERE categoria = 'administrativo' AND genero = 'Femenino'
      ORDER BY tiempo_total ASC
      LIMIT 3
    `);
  
    const libre = await conn.query(`
      SELECT nombre, tiempo_total, genero, categoria, RFID, idParticipante
      FROM participantes
      WHERE categoria = 'libre' AND genero = 'Femenino'
      ORDER BY tiempo_total ASC
      LIMIT 3
    `);
  
    return { estudiantil, administrativo, libre };
  }; */


