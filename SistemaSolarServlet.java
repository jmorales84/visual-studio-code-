package com.tesji.miservlet;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.PrintWriter;


@WebServlet("/sistema-solar")
public class SistemaSolarServlet extends HttpServlet {


    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // paso 4: Definir el  tipo de contenido para la respuesta
        resp.setContentType("text/html");
        String[] planetas = {"Mercurio", "Venus", "Tierra", "Marte", "Júpiter", "Saturno", "Urano", "Neptuno"};
        try (PrintWriter out = resp.getWriter()) {
            out.println("<!DOCTYPE html>");
            out.println("<html lang=\"en\">");
            out.println("<head>");
            out.println("   <meta charset=\"UTF-8\">");
            out.println("  <title>ESTRUCTURA DE DATOS CON JAKARTA EE</title>");
            out.println("</head>");
            out.println("<body>");
            out.println("  <h1>Jakarta ee con ESTRUCTURA DE DATOS </h1>");
            out.println("  <h4>Creado por: ing. Jessica Vega Morales</h4>");
            out.println("  <h2>\"SISTEMA SOLAR\"</h2>");
            out.println("<h4>En que consiste</h4>");
            out.println("<h5>El Sistema Solar es el conjunto de cuerpos que giran alrededor del Sol. Está conformado por planetas, satélites, asteroides, cometas.\n" +
                    "    Más allá de este sistema, abundan estrellas, galaxias y toda la complejidad del Universo que el humano intenta conocer.</h5>");
            out.println("<img src=\"https://concepto.de/wp-content/uploads/2018/02/Sistema-solar-e1518703607625.jpg\">");
            out.println(" <ul>");
            for (String planet : planetas) {
                out.println("<li> " + planet + "</li>");
            }
            out.println(" </ul>");
            out.println("</body>");
            out.println("</html>");
        }
    }
}
