package idc.repository;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.format.annotation.DateTimeFormat;

import idc.model.Analysis;

/**
 * Declare Analysis Repository and public Rest service "/analysis"
 * 
 * 
 * @author Victor de la Rosa
 *
 */
@RepositoryRestResource(collectionResourceRel = "analysis", path = "analysis")
public interface IdcRepository extends CrudRepository<Analysis, Serializable> {

	// adding new query methods (see
	// http://docs.spring.io/spring-data/jpa/docs/current/reference/html/#jpa.query-methods.query-creation)

	/**
	 * Find by application
	 * 
	 * @param application
	 * @return
	 */
	@RestResource(path = "applications", rel = "applications")
	public List<Analysis> findByApplication(@Param("application") String application);

	/**
	 * Search analysis between two dates.
	 * 
	 * @param initialDate
	 * @param endDate
	 * @return
	 */
	@RestResource(path = "dates", rel = "dates")
	public List<Analysis> findByExecdateBetween(@DateTimeFormat(pattern = "yyyyMMdd") @Param("initdate") Date initialDate,
	        @DateTimeFormat(pattern = "yyyyMMdd") @Param("enddate") Date endDate);

}
