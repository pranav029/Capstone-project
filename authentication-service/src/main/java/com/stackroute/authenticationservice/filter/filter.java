package com.stackroute.authenticationservice.filter;

import io.jsonwebtoken.Jwts;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class filter extends GenericFilter {
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {
        // TODO Auto-generated method stub

        HttpServletRequest httpRequest=(HttpServletRequest) request;
        HttpServletResponse httpResponse=(HttpServletResponse) response;
        String token=httpRequest.getHeader("Authorization");
        if(token==null || !token.startsWith("Bearer"))
        {
            throw new ServletException();
        }
        else
        {
            String jwtToken=token.substring(7);
            String email= Jwts.parser().setSigningKey("secretkey").parseClaimsJws(jwtToken).getBody().getSubject();
            request.setAttribute(email, email);
            chain.doFilter(request, response);
        }


    }
}
