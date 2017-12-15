<section class="talent-section" id ="talent">
	<div class="content">
		
		<div class="talent-intro">
			<h2 class="c-20-wide"><?php the_field('talent_headline');?></h2>
			<div class="talent-body-copy c-80-wide">
				<hr>
				<span><?php the_field('talent_body_copy');?></span>
			</div>
		</div>

		<div class="employee-section">
			<?php $argsEmployee = array(
			  'post_type' => 'employee',
			  'posts_per_page' => -1,
			  'order' => 'ASC',
			  'orderby' => 'menu_order'
			); $the_query = new WP_Query($argsEmployee);?>
			<?php if ($the_query->have_posts()) : ?>
				<?php while ($the_query->have_posts()) : $the_query->the_post(); ?>
					<div class="single-employee-container c-45-wide">
						<div class="employee-image-container">
				      <div class="employee-image background-image-section"
									<?php 
						      	$image = get_field('employee_image'); 
						      	$size = 'large'; 
						      	$thumb = $image['sizes'][ $size ];
						      	if (!empty($image))
				      		:?>
				        	style='background-image: url("<?php echo $thumb; ?>");'
				    		<?php endif;?>
				    	>
				    	</div>
				    </div>
				    <h3>
							<?php the_title();?>
						</h3>
			    	<h4>
			    		<?php the_field('employee_title');?>
			    	</h4>
			    	<p class="employee-bio">
			    		<?php the_field('employee_bio');?>
			    	</p>
			    </div>	
			  <?php endwhile; ?>
				<?php wp_reset_query(); ?>
			<?php endif; ?>
		</div>
	</div>
</section>