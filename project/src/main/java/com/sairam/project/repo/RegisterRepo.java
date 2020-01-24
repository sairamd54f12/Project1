package com.sairam.project.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.sairam.project.modal.RegisterModal;

public interface RegisterRepo extends JpaRepository<RegisterModal,Long> {

	@Query("select rm from RegisterModal rm where id=:id")
	RegisterModal findByIdre(Long id);
    
//	@Query("update RegisterModal set FirstName=:FirstName,LastName=:LastName,email=:email"
//			+ ",password=:password  where id=:id")
//	public void uuppdate(String FirstName,String LastName,String email,String password,Long id);
}
